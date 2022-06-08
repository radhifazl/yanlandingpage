<template>
   <div class="features-boxes"> 
      <div class="feature-box w-100" v-if="loading">
          <h5 style="color: #888">Loading Features...</h5>
      </div>
      <h5 style="color: #888" v-if="error">There is an error occured, sorry!</h5>
      <div class="feature-box" v-for="feature in features" :key="feature.title" :id="feature.title">
            <div class="feature-icon mx-auto">
                <img :src="feature.icon">
            </div>

            <div class="feature-title mt-3 text-center">
                <h5>
                    {{ feature.title }}
                </h5>
            </div>

            <div class="feature-desc">
                <p>
                    {{ feature.subtitle }}
                </p>
            </div>
      </div>
  </div>
</template>

<script>
import { storage, firestore } from "@/firebase";
import {  
    ref as  sref, getDownloadURL, listAll
} from "firebase/storage";
import {  
    addDoc, doc, getDoc
} from "firebase/firestore";

export default {
    name: 'FeaturesBox',
    data () {
        return {
            loading: false,
            error: false,
            features: [],
            icons: '',
            iconsUrl: ''
        }
    },
    props: [
        'storageOrder'
    ],
    methods: {
        async getIconsUrl () {
            this.loading = true
            const docRef = doc(firestore, 'features', 'yanpage_features', `${this.storageOrder}_feature`, this.storageOrder)

            await getDoc(docRef)
              .then(doc => {
                if(doc.exists) {
                    this.features.push({
                        title: doc.data().feature_title,
                        subtitle: doc.data().feature_subtitle,
                        icon: doc.data().iconUrl
                    })
                } else {
                    this.features = []
                }
              }).catch(() => {
                  this.error = true
              }).finally(() => {
                    this.loading = false
              })
        }
    },
    mounted () {
        this.getIconsUrl()
    }
    // setup () {
    //     const icons = ref([])
    //     const iconsUrl = ref([])

    //     const getIconUrl = async () => {
    //         const listRef = sref(storage, 'features', `${this.storageOrder}_icon`)
    //         await listAll(listRef)
    //           .then(list => {
    //             list.items.forEach(item => {
    //               icons.value.push(item.name)
    //             })
    //           }).catch(err => {
    //             console.log(err.code)
    //           })

    //         icons.value.forEach(async icon => {
    //             await getDownloadURL(sref(storage, 'features/' + icon))
    //               .then(url => {
    //                 iconsUrl.value.push(url)
    //               })
    //         })

    //         console.log(iconsUrl.value)

    //         iconsUrl.value.forEach((url, i) => {
    //             console.log(url)
    //         })
    //     }

    //     onMounted(() => {
    //         getIconUrl()
    //     })
    // }
}
</script>

<style scoped>

.feature-box {
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    box-shadow: var(--feature-boxshadow);
}

.feature-icon {
    width: 80%;
    height: 100px;
}

.feature-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.feature-title H5 {
    color: var(--feature-title-color);
}

.feature-desc {
    text-align: center;
}

.feature-desc p {
    color: var(--secondary-color);
}

@media screen and (max-width: 868px) {
    .features-box-wrapper {
        flex-direction: column;
        gap: 2rem;
    }

    .feature-box {
        width: 100%;
        padding: 1rem;
    }
}
</style>