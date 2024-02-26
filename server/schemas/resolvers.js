const {Users } = require('../models')

const resolvers = {
  Query: {
    user: async (parents,{username}) => {
      const user = await Users.findOne({username});
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }
  },
  Mutation: {
    signup: async (parent, { username, password }) => {
      if (await Users.findOne({ username })) {
        throw new Error('Username already exists');
      }
      return Users.create({ username, password });
    },
    login: async (parent, { username, password }) => {
      const user = await Users.findOne({ username });
      if (!user){
        throw new Error('Invalid Username');
      } else if (password !== user.password) {
        throw new Error('Invalid Password');
      }
      return user;
    }
  },
}

module.exports = resolvers;