<template>
  <div class="carousel">
        <div class="carousel-btn d-flex gap-3" v-if="loaded">
            <button class="th-btn prev" @click="prev">
                Prev
            </button>
            <button class="th-btn next" @click="next">
                Next
            </button>
        </div>
      <slot/>
  </div>
</template>

<script>
export default {
    name: 'CarouselComp',
    props: [
        'loaded'
    ],
    methods: {
        prev() {
            this.$emit('prev')
        },
        next() {
            this.$emit('next')
        }
    }
}
</script>

<style>
.carousel {
    width: 100vw;
    height: 100%;
    position: relative;
}

.carousel-btn {
    position: absolute;
    bottom: 20%;
    left: 0;
}

.th-btn {
    width: 100px;
    padding: 0.2rem 0;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    background: var(--secondary-color);
    color: var(--white);
    transition: all 0.35s ease-in-out;
}

.th-btn:hover {
    transform: translateY(-3px);
}


@media screen and (max-width: 868px) {
    .carousel {
        height: 75vh;
    }

    .carousel-btn {
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>