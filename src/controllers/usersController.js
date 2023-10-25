const bcrypt = require('bcrypt');
require('dotenv').config();
const db = require('../database/models');
const { User, Role  } = db; 

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
        image: req.file ? `${req.file.filename}` : "userPredeterminado.png"
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
  AdmincreateUser: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(secretHash + password, saltRounds);
  
      const newUser = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role_id: 2,
        image: req.file ? `${req.file.filename}` : "userPredeterminado.png"
      };
  
      const user = await User.create(newUser);
      if (user) {
       
        const users = await User.findAll();
        res.render("./users/listuser", { user: req.session.user, users: users  });
      }
      
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }   
  },
 updateUser : async (req, res) => {
    const userId = parseInt(req.params.id);


   
    const { firstName, lastName, email, password, type} = req.body;
  
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const hashedPassword = password ? await bcrypt.hash(secretHash + password, saltRounds) : user.password;
      
      const updateUsers={
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role_id: 2,
        image: req.file ? `${req.file.filename}` : "userPredeterminado.png"
      };
      
      
   
  
      const updated = await user.update(updateUsers, {
        where: { id: userId }
      });
      if (updated) {
       
      const users = await User.findAll();
      res.render("./users/listuser", { user: req.session.user, users: users  });}
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  

  deleteUser : async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await User.destroy({
        where: { id: id }
      });
     
      if (deleted) {
        const users = await User.findAll();
      res.render("./users/listuser", { user: req.session.user, users: users  });
      } else {
        res.status(404).json({ message: 'user not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
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
  getUserAdmin: async (req, res) => { 
    const users = await User.findAll();
   
    res.render("./users/listuser", { user: req.session.user, users: users  });
  
},
viewCreateUser: (req, res) => {
  res.render("./users/createUser", { user: req.session.user, });
},

viewUserEdit:async  (req, res) => {
  const userId = parseInt(req.params.id);

    try {
      const userdata = await User.findByPk(userId);  
    
  
      if (!userdata) {
        return res.status(404).json({ message: 'user not found' });
      }
  
      res.render('./users/editUser', { userdata: userdata, user: req.session.user });
    } catch (error) {
      console.error('Error fetching product details for editing:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
}

module.exports = usersController;
