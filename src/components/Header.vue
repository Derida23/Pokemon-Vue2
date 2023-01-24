<template>
  <v-app-bar app color="#E7E8F1" dark elevation="0">
    <div class="d-flex align-center justify-space-between w-full">
      <v-img
        alt="Vuetify Logo"
        src="../assets/img/pokemon-logo.png"
        width="120"
      />
    </div>
    <v-spacer></v-spacer>

    <v-btn icon class="mr-3" width="30">
      <v-img alt="Vuetify Name" src="../assets/img/pokecatch.png" width="10" />
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderComponent",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.bg-red {
  background: red;
}
</style>
