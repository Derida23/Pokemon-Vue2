<template>
  <v-app-bar app color="#E7E8F1" elevation="0" class="h-app">
    <div class="d-flex align-center justify-space-between pl-5">
      <v-img
        alt="Vuetify Logo"
        src="../assets/img/pokemon-logo.png"
        width="110"
      />
    </div>
    <v-spacer></v-spacer>

    <div class="pr-10">
      <v-btn depressed rounded class="text-lowercase">
        <span class="mr-2 t-catch">0 Catch</span>
        <v-img
          alt="Vuetify Name"
          src="../assets/img/pokecatch.png"
          width="20"
        />
      </v-btn>
    </div>
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
.h-app {
  .t-catch {
    color: #252525;
    font-weight: 600;
    font-size: 16px;
  }
}
</style>
