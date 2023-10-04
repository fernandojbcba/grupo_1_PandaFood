const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('../database/models/User.js');
const Role = require('../database/models/Role.js');
const saltRounds = 10
const secretHash = process.env.SECRETHASH


const usersController = {
  getAllUsers: async (req, res) => {
    const users = await User.findAll ()
    
    res.json(users);
  },

  getUserById: async (req, res) => {
    
    const userId = parseInt(req.params.id);

    const user = await User.findByPk(userId, {
      include: [
        {
          model: Role,
          as: 'userRole',
          attributes: ['name'] 
        }
      ]
  });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  },

  createUser: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(secretHash + password, saltRounds);
  
      const newUser = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role_id: 2,
        image: req.file ? `../../public/img/users/${req.file.filename}` : null
      };
  
      const user = await User.create(newUser);
      if (user) {
        res.render("./users/login", { user: req.session.user })
      }
      
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }   
  },

 updateUser : async (req, res) => {
    const userId = parseInt(req.params.id);
    const { firstName, lastName, email, password, type } = req.body;
  
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const hashedPassword = password ? await bcrypt.hash(secretHash + password, saltRounds) : user.password;
  
      // Actualizar los campos del usuario
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.password = hashedPassword;
      user.type = type;
      user.image = req.file ? `../../public/img/users/${req.file.filename}` : null;
  
      await user.save(); // Guardar los cambios en la base de datos
  
      res.json({ message: 'User updated successfully', user });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  

  deleteUser : async (req, res) => {
    const userId = parseInt(req.params.id);
  
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await user.destroy(); // Elimina el usuario de la base de datos
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  loginUser : async (req, res) => {
    const { email, password, remember } = req.body;

    try {
      const user = await User.findOne({ where:  {email} });

      if (user && bcrypt.compareSync(secretHash + password, user.password)) {
        if (remember) {
          res.cookie('rememberedUser', email, { maxAge: 3600000 * 24 * 7 });
        }
    
        req.session.user = user;
        res.redirect('/');
      } else {
        res.redirect('/login');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Internal Server Error' });
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
