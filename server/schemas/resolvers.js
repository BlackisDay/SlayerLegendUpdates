const User = require('../models/user');
const bcrypt = require('bcryptjs');
const resolvers = {
  Query: {
    user: async () => { 
      try {
        const user = await User.findOne();
        if(user){
          return console.log('User found: ', user);
        }
        const successful = console.log('User found: ', user);
        res.status(200).json(successful);
        return user;
      } catch (error) {
        console.log(error);
        throw new Error('Error fetching user data');
      }
    }
  },
  Mutation: {
    signup: async (_, { username, password }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword })
        const savedUser = await User.save(); 
        const successful =console.log('User created: ', user);
        res.status(200).json(savedUser + successful);
        return user;
      } catch (error) {
        throw new Error('Error creating user');
      }
    },
    login: async (_, { username, password }) => {
      try {
        const user = await User.findOne({ username});
        if (!user) {
          throw new Error('User not found');
        }
        const passwordMatch = await bcrypt.compareSync(password, User.password);
        if (passwordMatch === false) {
          throw new Error("incorrect password " + console.log(passwordMatch) + console.log(user.password) + console.log(Error));
        } else if (passwordMatch === true){
          console.log(passwordMatch);
        }
           console.log('Login successful');
        return user;
      } catch (error) {
        throw new Error(console.error('Error logging in: ', error));
      }
    }
  }
}
module.exports = resolvers;
