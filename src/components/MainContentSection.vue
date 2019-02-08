<template lang="pug">

    #main-section-content-container
        #main-section-content
            h1#main-title Aaron Ahn
            p#main-subtitle Web Developer
    

</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
#main-section-content-container
    position: absolute
    top: 0
    left: 0
    height: 100%
    display: table
#main-section-content
    display: table-cell
    vertical-align: middle
    padding-left: 3em
    color: rgba(255,255,255,0.8)
    text-align: center
#main-title
    font-size: 1.5em
    text-transform: uppercase
    letter-spacing: 10px
    margin-right: -10px

#main-subtitle
    font-size: 0.6em
    text-transform: uppercase
    letter-spacing: 2px
    font-weight: bold
    margin-top: 0.5em
    margin-right: -2px
</style>
