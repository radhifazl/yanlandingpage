<template>
  <div class="home-slides">
      <CTAButton/>
      <div class="image-slide-wrapper">
        <Images/>
      </div>
  </div>
</template>

<script>
import CTAButton from "../Buttons/CTAButton.vue"
import Images from './Images.vue'

export default {
    name: 'HomeSlides',
    components: {
        CTAButton,
        Images
    }
}
</script>

<style scoped>
.home-slides {
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 868px) {
  .home-slides {
    width: 100%;
    position: static;
    flex-direction: column-reverse;
    transform: translateX(0);
    gap: 1rem;
    margin-top: -15rem;
    padding-bottom: 2rem;
  }
}
</style>