<template>
  <div class="finder">
    <v-row dense>
      <v-col>
        <h2>Find your pokemon</h2>
      </v-col>
      <v-col sm="5" md="5" lg="4" xl="3">
        <p-text-field v-model="search"></p-text-field>
      </v-col>
    </v-row>
    <div class="text-center">
      <Loading v-if="loading" />
    </div>
    <Pokemon />
    <Error v-if="queryError" :error="queryError" />
  </div>
</template>

<script>
import Error from "@/components/Form/Error.vue";
import Loading from "@/components/Form/Loading.vue";
import pTextField from "@/components/Form/pTextField.vue";
import Pokemon from "@/components/Pokemon.vue";
import { mapActions, mapState } from "vuex";
import debounce from "lodash/debounce";
export default {
  components: { pTextField, Loading, Error, Pokemon },
  name: "HomeView",
  data() {
    return {
      search: "",
    };
  },
  mounted() {
    this.getList();
  },
  watch: {
    search() {
      this.handleSearch();
    },
  },
  methods: {
    ...mapActions(["findPokemon"]),

    async getList() {
      return this.findPokemon("pikachu");
    },

    handleSearch: debounce(function () {
      this.findPokemon(this.search);
    }, 500),
  },
  computed: {
    ...mapState(["loading", "queryError"]),
  },
};
</script>
