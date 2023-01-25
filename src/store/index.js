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
  //getters, son para calcular con los datos del estado (cómo computed)
  getters: {},
  //mutations, son para modificar el estado (cómo methods), deben ser síncronas
  mutations: {
    //getDataPokemons: (state, data) => state.pokemonsAll = data
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
  //actions, llaman a las mutations para modificar el estado, funciona de forma asíncrona
  actions: {
    findPokemon: (context, query) => {
      console.log("asd");
      context.commit("loading");
      api.findPokemon(query).then((data) => {
        context.commit("getPokemon", data);
      });
    },
  },
  //modules,
  modules: {},
});
