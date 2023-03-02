// import axios from "../service/axios";
import axios from "axios";
const getAllPosts = {
  state: () => ({
    allPosts: [],
    isLoading: true,
    errorMessage: "",
    url: "",
    extraMsg: "",
  }),
  mutations: {
    async getPost(state) {
      try {
        let url = state.url || "https://jsonplaceholder.typicode.com/posts";
        //   https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
        const result = await axios.get(url);
        console.log(typeof result.data);
        // if (typeof result.data == "object" && result.data.length) {
          state.allPosts = result.data;
        // } else {
        //   console.log(result.data[`${Object.keys(result.data)[0]}`]);
        //   state.allPosts ==
        //      result.data[`${Object.keys(result.data)[0]}`];
        //   console.log(state.allPosts, 111);
        // }
        state.isLoading = false;
        state.extraMsg = "";
      } catch (error) {
        state.allPosts = [];
        state.errorMessage = error.message;
        state.isLoading = false;
        state.extraMsg = "invalid url specified";
      }
    },
    getInputValue(state) {
      console.log(state.url);
    },

    renderPost(state, str) {
      if (str.length > 5) {
        console.log(str.slice(str.length - 3, str.length));
        if (
          str.slice(str.length - 3, str.length) === "img" ||
          str.slice(str.length - 3, str.length) === "jpg"
        ) {
          return "img";
        } else {
          return "text";
        }
      } else {
        return "text";
      }
    },
  },
  actions: {
    async callGetPost(context) {
      context.commit("getPost");
    },
  },
  getters: {},
};

export default getAllPosts;
