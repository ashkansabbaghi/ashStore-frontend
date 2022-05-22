export default {
  setImage(state, image) {
    state.image = image;
  },

  setBlogs(state, blogs) {
    state.blogs = blogs;
  },

  setBlog(state, blog) {
    state.blog = blog;
  },

  setCategories(state, categories) {
    state.categories = categories
  },

  setUsers(state, users) {
    state.users = users
  },
  setUser(state, user) {
    console.log(user);
    state.user = user
  },
};
