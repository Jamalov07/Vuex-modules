import { createStore } from "vuex";
import getAllPosts from "../modules/getAllPosts";
const store = createStore({
  modules: {
    getAllPosts,
  },
});

export default store;
