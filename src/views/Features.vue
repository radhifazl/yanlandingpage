<template>
  <div class="features page-container">
      <PageTitle :title="title"/>

      <div class="features-about my-5">
        <h5>
          {{desc}}
        </h5> 
      </div>

      <div class="features-box-wrapper">
        <FeaturesBox class="mt-1" :storageOrder="'first'"/>
        <FeaturesBox class="mt-1" :storageOrder="'second'"/>
        <FeaturesBox class="mt-1" :storageOrder="'third'"/>
        <FeaturesBox class="mt-1" :storageOrder="'fourth'"/>
      </div>
  </div>
</template>

<script>
import FeaturesBox from '../components/Features/FeaturesBox.vue'
import PageTitle from '../components/Title/PageTitle.vue'
import { onMounted, ref } from "vue";
import { firestore } from "@/firebase";
import {  
  getDoc, doc
} from "firebase/firestore";

export default {
  components: { PageTitle, FeaturesBox },
  name: 'FeaturesView',
  setup () {
    let title = ref(''),
        desc = ref('');
    
    const getContent = async () => {
      const docRef = doc(firestore, 'features', 'yanpage_features')
      await getDoc(docRef)
        .then(doc => {
          if(doc.exists) {
            title.value = doc.data().title
            desc.value = doc.data().desc
          } else {
            title.value = 'Fitur Terbaik YAN'
            desc.value = 'YAN Invitation menawarkan fitur-fitur yang siap digunakan dan di aplikasikan ke dalam undangan kamu, berikut ini adalah beberapa fitur terbaik dari semua fitur yang YAN Invitation sediakan :'
          }
        })
    }

    onMounted(() => {
      getContent()
    })

    return {
      title,
      desc
    }
  }
}
</script>

<style scoped>

.features-box-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

@media screen and (min-width: 992px) {
  .features {
    padding-top: 8rem;
  }

  .features-about {
    width: 70%;
  }
}

.features-about h5 {
  color: var(--secondary-color);
}
.features-about h5 span {
  color: var(--primary-color);
}
</style>