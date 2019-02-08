<template lang="pug">

  #app.full-height.full-width
    Nav
    Main

</template>

<script>
import Nav from "./Nav.vue";
import Main from "./Main.vue";

export default {
  components: {
    Main,
    Nav
  }
};
</script>

<style lang="sass" scoped></style>
