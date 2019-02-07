<template>
  <h1>Hello World</h1>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("user", {
      isLoggedIn: "isLoggedIn"
    })
  }
};
</script>

<style lang="sass">
h1
    color: blue
</style>
