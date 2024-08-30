export const resolvers2 = {
    Query: {
      post: async (_parent, { id }, { dataSources }) => {
        return dataSources.apiPractice.getPostById(id);
      },
      posts: async (_parent, _args, { dataSources }) => {
        return dataSources.apiPractice.getAllPosts();
      },
      user: async (_parent, { id }, { dataSources }) => {
        return dataSources.apiPractice.getUserById(id);
      },
      users: async (_parent, _args, { dataSources }) => {
        return dataSources.apiPractice.getAllUsers();
      },
    },
    Post: {
      user: async (post, _args, { dataSources }) => {
        return dataSources.apiPractice.getUserById(post.userId);
      },
    },
    User: {
      posts: async (user, _args, { dataSources }) => {
        const posts = await dataSources.apiPractice.getAllPosts();
        return posts.filter((post) => post.userId === user.id);
      },
    },
  };
  