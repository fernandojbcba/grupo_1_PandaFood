const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');

const checkRememberedUser = (req, res, next) => {
  try {
    const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

    const rememberedUser = req.cookies.rememberedUser;
    
    if (rememberedUser) {
      const user = usersData.find((user) => user.id === rememberedUser.id);

      if (user && bcrypt.compareSync(secretHash + rememberedUser.password, user.password)) {
        req.session.user = user;
      }
    }

    next();
  } catch (error) {
    console.error('Error al leer el archivo de usuarios:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const checkAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

const checkNotAuthenticated = (req, res, next) => {
  if (!req.session.user) {
   next();
  } else {
    res.redirect('/registro'); 
  }
};

module.exports = {checkRememberedUser, checkAuthenticated, checkNotAuthenticated };

  
