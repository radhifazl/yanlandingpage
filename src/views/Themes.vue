<template>
  <div class="themes-container page-container">
      <PageTitle :title="'Tema Terbaik YAN'" class="theme-page-title"/>

      <Carousel @prev="prev" @next="next">
          <CarouselSlide v-for="(theme, index) in themes" 
            :key="theme.name" 
            :index="index"
            :visibleSlide="visibleSlide"
          >
            <Transition name="fade">
                <div class="carousel-title" v-show="visibleSlide === index">
                    <h1>
                        {{ theme.name }}
                    </h1>
                </div>
            </Transition>

            <Transition name="fade">
                <div class="carousel-img" v-show="visibleSlide === index">
                    <img :src="theme.src">
                </div>
            </Transition>
          </CarouselSlide>
      </Carousel>
  </div>
</template>

<script>
import PageTitle from '@/components/Title/PageTitle.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import CarouselSlide from '@/components/Carousel/CarouselSlide.vue'
export default {
    components: { Carousel, PageTitle, CarouselSlide },
    name: 'ThemesView',
    data() {
        return {
            themes: [
                {
                    name: 'Samudera Biru',
                    src: require('@/assets/images/themeslides/T-1.png'),
                },
                {
                    name: 'Green Gold',
                    src: require('@/assets/images/themeslides/T-2.png'),
                },
                {
                    name: 'Love Shades',
                    src: require('@/assets/images/themeslides/T-3.png'),
                },
                {
                    name: 'Flower Purple',
                    src: require('@/assets/images/themeslides/T-4.png'),
                },
            ],
            visibleSlide: 0,
            direction: '',
        }
    },
    computed: {
        slideLength() {
            return this.themes.length
        }
    },
    methods: {
        prev() {
            if(this.visibleSlide >= this.slideLength - 1) {
                this.visibleSlide = 0
            } else {
                this.visibleSlide++
            }
            this.direction = 'left'
        },
        next() {
            if(this.visibleSlide <= 0) {
                this.visibleSlide = this.slideLength - 1
            } else {
                this.visibleSlide--
            }
            this.direction = 'right'
        }
    }
}
</script>

<style scoped>
.themes-container {
    overflow: hidden;
    padding: 0;
}

.theme-page-title {
    transform: translateY(5rem);
    padding: 0 1.3rem;
}
.carousel-title {
    width: 50%;
}

.carousel-title h1 {
    width: 30%;
    text-transform: uppercase;
    color: var(--secondary-color);
    font-size: 5rem;
    font-weight: 600;
}

.carousel-img {
    width: 50%;
    height: 90vh;
}

.carousel-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.fade-enter-active {
    animation: fadeIn 0.5s ease-in-out;
}

.fade-leave-active {
    animation: fadeOut 0.5s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}


@media screen and (max-width: 868px) {
    .themes-container {
        padding-top: 5rem;
    }

    .theme-page-title {
        transform: translateY(0);
        margin-bottom: 2rem;
    }

    .carousel-title {
        width: 100%;
        margin-bottom: 2rem;
    }

    .carousel-title h1 {
        text-align: center;
        width: 100%;
        font-size: 2rem;
    }

    .carousel-img {
        width: 100%;
        height: 50vh;
    }
}

@media screen and (min-width: 992px) {
    .themes-container {
        padding: 0 1.3rem;
    }

    .theme-page-title {
        padding: 0;
    }
}
</style>