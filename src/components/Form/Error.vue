<template>
  <div>{{ error }}</div>
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
