<template>
  <div class="image-flex">
      <div class="image-slide" v-for="(image, i) in images" :key="'image-'+i">
          <img :src="image">
      </div>
  </div>
</template>

<script>
import { firestore } from "@/firebase";
import { getDocs, doc, collection } from "firebase/firestore";
import { ref, onMounted } from 'vue';

export default {
    name: 'ImageList',
    setup () {
        const images = ref([])
        const getSlides = async () => {
            const docRef = collection(firestore, 'home', 'yanpage_home', 'images')
            await getDocs(docRef)
                .then(docs => {
                    docs.forEach(doc => {
                        if(doc.exists) {
                            images.value.push(doc.data().url)
                        }
                    })
                })
        }

        onMounted(() => {
            getSlides()
        })

        return {
            images
        }
    }
}
</script>

<style>
.image-slide {
    width: 300px;
    height: 170px;
}

.image-slide:hover {
    transition: all 0.35s ease-in-out;
}


.image-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

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