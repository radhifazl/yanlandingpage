<template>
  <div class="features-box-wrapper">
      <div class="feature-box" v-for="(feature, i) in features" :key="feature.name" :id="'feature-' + i">
          <div class="feature-icon">
              <img :src="feature.icon">
          </div>

          <div class="feature-title mt-3">
              <h5>
                  {{ feature.name }}
              </h5>
          </div>

          <div class="feature-desc">
              <p>
                    {{ feature.desc }}
              </p>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name: 'FeaturesBox',
    data () {
        return {
            features: [
                {
                    icon: require('@/assets/icons/Message.svg'),
                    name: 'Buku Tamu',
                    desc: 'Tamu bisa mengirim ucapan dan doa disertai status kehadiran'
                },
                {
                    icon: require('@/assets/icons/Gallery.svg'),
                    name: 'Galeri Foto',
                    desc: 'Bagikan momen bahagia mu kepada tamu undangan'
                },
                {
                    icon: require('@/assets/icons/BGM.svg'),
                    name: 'Background Music',
                    desc: 'Hiasi undanganmu dengan menambahkan musik favorit'
                },
                {
                    icon: require('@/assets/icons/Amplop.svg'),
                    name: 'Amplop Digital',
                    desc: 'Tamu bisa memberikan amplop secara digital / dengan e-money'
                },
            ]
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
}

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