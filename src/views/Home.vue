<template>
  <div class="home page-container">
      <div class="home-content">
        <div class="content left-side">
          <h1>{{ title }}</h1>
        </div>
        <div class="content right-side">
          <h1>{{ subtitle }}</h1>
        </div>
        <Slides/>
      </div>
  </div>
</template>

<script>
import Slides from '../components/HomeSlides/Slides.vue'
import { onMounted, ref } from 'vue'
import { storage, firestore } from "@/firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";

export default {
  components: { Slides },
  name: 'HomeView',
  data () {
    return {
      images: [],
      imagesUrl: []
    }
  },
  setup () {
    let title = ref('')
    let subtitle = ref('')

    const getTitleAndSubtitle = async () => {
      const docRef = doc(firestore, 'home', 'yanpage_home')
      await getDoc(docRef)
        .then(doc => {
          if(doc.exists) {
            title.value = doc.data().title
            subtitle.value = doc.data().subtitle
          } else {
            title.value = 'Yanpage'
            subtitle.value = 'A simple blog'
          }
        })
    }

    onMounted(() => {
      getTitleAndSubtitle()
    })

    return {
      title,
      subtitle
    }
  }
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
  font-size: 6rem;
  line-height: 6rem;
}

.left-side h1 span {
  font-size: 4.5rem;
}

.right-side {
  width: 57%;
  background: var(--bg);
  transition: all 0.35s ease;
}

.right-side h1 {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 3rem;
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
    height: 60%;
  }

  .left-side h1 {
    font-size: 3.2rem;
    line-height: 4rem;
  }

  .right-side {
    padding-top: 1.5rem;
    height: 100%;
  }

  .right-side h1 {
    font-size: 1.8rem;
  }
}
</style>