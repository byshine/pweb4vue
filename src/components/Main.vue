<template lang="pug">

  section#main-section.full-height.full-width
    MainVideo
    MainContentSection
    

</template>

<script>
import MainContentSection from "./MainContentSection.vue";
import MainVideo from "./MainVideo.vue";
export default {
  components: {
    MainContentSection,
    MainVideo
  }
};
</script>

<style lang="sass" scoped>
#main-section
    position: relative
</style>
