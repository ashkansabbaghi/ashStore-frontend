import api from "axios";
// let BaseURL = "http://api.ashkansabbaghi.ir/api/v1/"
// let BaseURL = "http://localhost:8080/api/v1/"
let BaseURL = "api/v1/"

let PRODUCT = "products/"
let PRODUCT_CAT = "products/pro-cat/"


export default {

  async getProductOfCategory({
    commit
  }, catId) {
    await api.post(`${BaseURL}${PRODUCT_CAT}`, {categoryId :catId })
    .then((res) => {
      console.log(res.data);
      if (res.status === 200) commit("setProductCategory", res.data);
    })
    .catch((err) => {console.log(err);})
  },

};
