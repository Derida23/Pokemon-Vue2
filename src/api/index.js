import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

export default {
  async findPokemon(query = "pikachu") {
    try {
      const response = await axios.get(baseURL + query?.toLowerCase());
      return response.data;
    } catch (e) {
      console.error(e);
      return ["error", e.response.data];
    }
  },
};
