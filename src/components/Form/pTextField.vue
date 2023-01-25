<template>
  <v-text-field
    placeholder="Search pokemon..."
    class="label-height"
    height="44px"
    background-color="white"
    dense
    outlined
    rounded
    v-model="vModel"
  ></v-text-field>
</template>

<script>
export default {
  name: "vTextField",
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    vModel: {
      // getter
      get: function () {
        return this.value;
      },
      // setter
      set: function (newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>
