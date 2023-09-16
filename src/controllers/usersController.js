const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../data/users.json');
const saltRounds = 10;
const secretHash = 'clavesecreta';

const usersController = {
  getAllUsers: (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    res.json(users);
  },

  getUserById: (req, res) => {
    
    const userId = parseInt(req.params.id);
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    const user = users.find((user) => user.id === userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  },

  createUser: (req, res) => {

    const { firstName, lastName, email, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

    bcrypt.hash(secretHash + password, saltRounds, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
        email,
        password: hashedPassword,
        type: "customer",
        image: req.file ? `../../public/img/users/${req.file.filename}` : null
      };

      users.push(newUser);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

      res.json({ message: 'User created successfully', user: newUser });
    });
  },

  updateUser: (req, res) => {
   
    const userId = parseInt(req.params.id);
    const { firstName, lastName, email, password, type } = req.body;

    let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex !== -1) {
      const hashedPassword = password ? bcrypt.hashSync(secretHash + password, saltRounds) : users[userIndex].password;

      users[userIndex] = {
        ...users[userIndex],
        firstName,
        lastName,
        email,
        password: hashedPassword,
        type,
        image: req.file ? `../../public/img/users/${req.file.filename}` : null,
      };

      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
      res.json({ message: 'User updated successfully', user: users[userIndex] });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  },

  deleteUser: (req, res) => {
   
    const userId = parseInt(req.params.id);

    let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    const updatedUsers = users.filter((user) => user.id !== userId);

    if (updatedUsers.length < users.length) {
      fs.writeFileSync(usersFilePath, JSON.stringify(updatedUsers, null, 2));
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  },
  loginUser: (req, res) => {
  
    const { email, password,remember } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

    const user = users.find((user) => user.email === email);

    if (user && bcrypt.compareSync(secretHash + password, user.password)) {
      if (remember) {
        res.cookie('rememberedUser', email, { maxAge: 3600000 * 24 * 7 });
      }
      req.session.user = user;
      res.redirect('/'); 
    } else {
      res.redirect('/login'); 
    }
  },
  logoutUser: (req, res) => {
   
    res.clearCookie('rememberedUser');
    req.session.destroy((err) => {
      if (err) {
        console.error('Error al cerrar sesión:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      } else {
        
        res.redirect('/login');
      }
    });
  },
};

module.exports = usersController;
