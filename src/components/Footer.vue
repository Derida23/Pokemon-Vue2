<template>
  <v-footer padless>
    <v-col class="text-center r-link" cols="12">
      <router-link to="/" class="mr-3">Home</router-link>
      <router-link to="/about">About</router-link>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.r-link {
  a {
    font-weight: 500;
    text-decoration: none;
  }

  a:hover {
    color: #ffcb03;
  }
}
</style>
