import Vue from "vue";
import Vuex from "vuex";
import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemon: null,
    queryEmpty: false,
    queryError: null,
    loading: false,
  },
  getters: {},
  mutations: {
    getPokemon(state, data) {
      if (data[0] === "error") {
        state.queryError = data[1];
      } else if (data === "empty") {
        state.queryEmpty = true;
      } else {
        state.pokemon = data;
      }

      state.loading = false;
    },
    loading(state) {
      state.queryEmpty = false;
      state.queryError = null;
      state.pokemon = null;
      state.loading = true;
    },
  },
  actions: {
    findPokemon: async ({ commit }, query) => {
      commit("loading");

      if (query === "") {
        query = "pikachu";
      }

      await api
        .findPokemon(query)
        .then((data) => {
          commit("getPokemon", data);
        })
        .catch((err) => console.error(err));
    },
  },
  modules: {},
});
