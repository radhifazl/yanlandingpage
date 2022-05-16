<template>
  <div class="home page-container">
      <div class="home-content">
        <div class="content left-side">
          <h1><span>YAN</span> <br> INVITATION</h1>
        </div>
        <div class="content right-side">
          <h1>Buat Undangan Lebih <br class="d-lg-block d-none"> Modern Dengan Undangan <br> Digital</h1>
        </div>
        <Slides/>
      </div>
  </div>
</template>

<script>
import Slides from '../components/HomeSlides/Slides.vue'
export default {
  components: { Slides },
    name: 'HomeView'
}
</script>

<style scoped>
.home {
  height: 700px;
  padding: 0;
  transition: all 0.35s ease;
}

.home-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
}

.content {
  height: 100%;
  padding: 0 2rem;
  padding-top: 10rem;
}

.left-side {
  width: 40%;
  background: var(--primary-color);
}

.left-side h1 {
  color: #FFFFFF;
  font-weight: 600;
  font-size: 4rem;
  line-height: 3.5rem;
}

.left-side h1 span {
  font-size: 4.5rem;
}

.right-side {
  width: 60%;
  background: var(--bg);
  transition: all 0.35s ease;
}

.right-side h1 {
  color: var(--primary-color);
  font-weight: 600;
}

@media screen and (max-width: 868px) {
  .home {
    height: 800px;
  }

  .home-content {
    flex-direction: column;
    overflow: hidden;
  }

  .content {
    padding-top: 7rem;
  }

  .left-side, .right-side {
    width: 100%;
  }

  .left-side {
    height: 70%;
  }

  .left-side h1 {
    font-size: 3.2rem;
  }

  .right-side {
    padding-top: 1.5rem;
    height: 100%;
  }
}
</style>