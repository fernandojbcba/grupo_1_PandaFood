const User = require('../database/models/User');
const Role = require('../database/models/Role');
const bcrypt = require('bcrypt');
const saltRounds = 10
const secretHash = process.env.SECRETHASH;

const createUser = async (req, res) => {
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
    res.status(201).json(user);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};




const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await User.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedUser = await User.findByPk(id);
      res.json({ message: 'User updated', user: updatedUser });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser
};
