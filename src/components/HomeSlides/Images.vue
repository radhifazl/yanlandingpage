<template>
  <div class="image-flex">
      <div class="image-slide">
          <img src="../../assets/images/homeslides/slide1.png">
      </div>
      <div class="image-slide">
          <img src="../../assets/images/homeslides/slide2.png">
      </div>
      <div class="image-slide">
          <img src="../../assets/images/homeslides/slide3.png">
      </div>
  </div>
</template>

<script>
export default {
    name: 'ImageList'
}
</script>

<style>
.image-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}

@media screen and (max-width: 868px) {
    .image-flex {
        justify-content: center;
    }

    .image-slide {
        width: 250px;
        height: 150px;
    }

    .image-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>