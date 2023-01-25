<template>
  <div class="text-center">
    Pokemon
    {{ error }}
  </div>
</template>

<script>
export default {
  name: "ErrorComponent",
  props: {
    error: {
      type: [String],
      default: "",
    },
  },
};
</script>
