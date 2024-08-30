import pubsub from './pubsub.js';
import { users, messages } from './data.js';

const MESSAGE_SENT = 'MESSAGE_SENT';

const resolvers = {
  Query: {
    users: () => users,
    messages: () => messages,
  },
  Mutation: {
    sendMessage: (_, { userId, content }) => {
      const user = users.find((user) => user.id === userId);
      if (!user) throw new Error('User not found');

      const message = {
        id: `${messages.length + 1}`,
        content,
        user,
      };

      messages.push(message);
      pubsub.publish(MESSAGE_SENT, { messageSent: message });

      return message;
    },
  },
  Subscription: {
    messageSent: {
      subscribe: () => pubsub.asyncIterator(MESSAGE_SENT),
    },
  },
  Message: {
    user: (message) => users.find((user) => user.id === message.user.id),
  },
};

export default resolvers;
