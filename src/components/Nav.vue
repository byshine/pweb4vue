<template lang="pug">

    nav#main-nav
        #main-nav-left
        #main-nav-right
            .hamburger
                span.hamburger-top
                span.hamburger-middle
                span.hamburger-bottom
            

</template>

<script>
import Main from "./Main.vue";

export default {
  components: {
    Main
  }
};
</script>

<style lang="sass" scoped>
#main-nav
    position: fixed;
    top: 0
    left: 0;
    background-color: transparent
    z-index: 1
    width: 100%
    display: table
    height: 50px

#main-nav-left,
#main-nav-right
    display: table-cell
    width: 50%
    vertical-align: middle

#main-nav-right
    text-align: right
    padding-right: 1em

.hamburger
    display: inline-block

.hamburger-top,
.hamburger-middle,
.hamburger-bottom
    display: block
    background-color: white
    height: 2px

.hamburger-top
    width: 20px
    margin-bottom: 5px
.hamburger-middle
    width: 20px
    margin-bottom: 5px
.hamburger-bottom
    width: 20px
</style>
