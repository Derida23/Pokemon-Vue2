import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

export default {
  async findPokemon(query) {
    if (query === "") {
      return "empty";
    } else {
      try {
        const response = await axios.get(baseURL + query.toLowerCase());
        return response.data;
      } catch (e) {
        console.log(e);
        return ["error", query];
      }
    }
  },
  /*
  findPokemon(query) {
    return axios
      .get(baseURL + query)
      .then(response => {
        return response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  */
};
