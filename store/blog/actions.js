import api from "axios";
// URL = "https://picsum.photos/v2/list";
URL = "http://ashkansabbaghi.ir/index.php?rest_route=/wp/v2/posts";

export default {
  getImage({ commit }) {
    api.get(`${URL}`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        commit("setImage", res.data);
      }
    });
  },

 async getBlogs({ commit }) {
   await api.get(`${URL}`).then((res) => {
      // console.log(res.data);
      if (res.status === 200) commit("setBlogs", res.data);
    });
  },
};
