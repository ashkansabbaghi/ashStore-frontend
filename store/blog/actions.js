import api from "axios";
let URL = "https://picsum.photos/v2/list";

let URL_WP = "http://blog.ashkansabbaghi.ir/index.php?rest_route=/wp/v2/"
let POST = "posts/";
let USER = "users/";
let CAT = "categories/";

export default {
  async getBlogs({
    commit
  }) {
    await api.get(`${URL_WP}${POST}`).then((res) => {
      console.log(res.data);
      if (res.status === 200) commit("setBlogs", res.data);
    });
  },

  async getCategories({
    commit
  }) {
    await api.get(`${URL_WP}${CAT}`).then((res) => {
      // console.log(res.data);
      if (res.status === 200) commit("setCategories", res.data);
    });
  },

  async getUsers({
    commit
  }) {
    await api.get(`${URL_WP}${USER}`).then((res) => {
      console.log(res.data);
      if (res.status === 200) commit("setUsers", res.data);
    });
  },

  async getBlog({
    commit
  }, slug) {
    // console.log(slug);
    await api.get(`${URL_WP}${POST+slug}`).then((res) => {
      // console.log(res.data);
      if (res.status === 200) commit("setBlog", res.data);
    });
  },

  async getUser({
    commit
  }, id) {
    // console.log(id);
    console.log(`${URL_WP}${USER+id}`);
    await api.get(`${URL_WP}${USER+id}`).then((res) => {
      console.log(res);
      if (res.status === 200) commit("setUser", res.data);
    });
  },
};
