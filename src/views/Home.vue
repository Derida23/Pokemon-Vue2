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
    <Loading v-if="loading" />
    <Pokemon />
    <pre>{{ queryError }}</pre>
    <Error v-if="queryError" :error="queryError" />
  </div>
</template>

<script>
import Error from "@/components/Form/Error.vue";
import Loading from "@/components/Form/Loading.vue";
import pTextField from "@/components/Form/pTextField.vue";
import Pokemon from "@/components/Pokemon.vue";
import { mapActions, mapState } from "vuex";
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
  methods: {
    getList() {
      return {
        ...mapActions(["findPokemon"]),
      };
    },
  },
  computed: {
    ...mapState(["loading", "queryError"]),
  },
};
</script>
