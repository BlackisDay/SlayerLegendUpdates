const User = require('../models/user');

const resolvers = {
  Query: {
    user: async () => {
      try {
        const user = await User.findOne();
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
        const user = await User.create({ username, password });
        return user;
      } catch (error) {
        throw new Error('Error creating user');
      }
    },
    login: async (_, { username, password }) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error('User not found');
        }
        const isCorrectPassword = await user.isCorrectPassword(password);
        if (!isCorrectPassword) {
          throw new Error('Invalid password');
        }
        return user;
      } catch (error) {
        throw new Error('Error logging in');
      }
    }
  }
};

module.exports = resolvers;
