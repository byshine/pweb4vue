<template lang="pug">

    video(playsinline preload="auto" muted="true" loop="true" autoplay="true")#main-video.full-height.full-width
        source(src="../video/intro.mp4")
    

</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
#main-video
    display: block
    object-fit: cover
    padding: 0
    margin: 0
</style>
