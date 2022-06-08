<template>
  <div class="about-container w-100">
      <LoadContent v-if="loading"/>
      <div class="about-content" v-for="about in aboutContent" :key="about.title" v-else>
          <h3 class="title mb-3">{{ about.title }}</h3>
          <p>
            {{ about.desc }}
          </p>

            <router-link to="/">
                Get Back
            </router-link>
      </div>
  </div>
</template>

<script>
import { firestore } from '@/firebase'
import { doc, getDoc } from "firebase/firestore";
import LoadContent from '@/components/Loading/LoadContent.vue';

export default {
  components: { LoadContent },
    name: 'AboutYan',
    data () {
        return {
            aboutContent: [],
            loading: false
        }
    },
    methods: {
        async getAboutDoc () {
            this.loading = true
            const aboutDoc = doc(firestore, 'about', 'yanpage_about')
            const getAboutDoc = await getDoc(aboutDoc)

            if(getAboutDoc.exists) {
                await getDoc(aboutDoc)
                 .then(doc => {
                     this.aboutContent.push(doc.data())
                 }).catch(err => {
                     console.log(err)
                     this.aboutContent = [{
                         title: 'About Yan',
                         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.'
                     }]
                 }).finally(() => {
                     this.loading = false
                 })
            }
            console.log(this.aboutContent)
        }
    },
    mounted () {
        this.getAboutDoc()
    }
}
</script>

<style scoped>
.about-container {
    height: 100vh;
    background: var(--primary-color);
    display: grid;
    place-items: center;
}

.about-content {
    width: 80%;
    height: fit-content;
    padding: 1rem;
    border-radius: 10px;
    background: var(--bg);
}

.about-content {
    color: var(--secondary-color);
}
</style>