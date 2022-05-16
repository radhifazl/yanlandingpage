<template>
  <div class="features page-container">
      <PageTitle :title="'Fitur Terbaik Yan'"/>

      <div class="features-about my-5">
        <h5>
          <span>YAN Invitation</span> menawarkan fitur-fitur yang siap digunakan dan di <br> aplikasikan ke dalam undangan kamu,
          berikut ini adalah beberapa <br> fitur terbaik dari semua fitur yang YAN Invitation sediakan :
        </h5> 
      </div>

      <FeaturesBox class="mt-1"/>
  </div>
</template>

<script>
import FeaturesBox from '../components/Features/FeaturesBox.vue'
import PageTitle from '../components/Title/PageTitle.vue'
export default {
  components: { PageTitle, FeaturesBox },
    name: 'FeaturesView'
}
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .features {
    padding-top: 8rem;
  }
}

.features-about h5 {
  color: var(--secondary-color);
}
.features-about h5 span {
  color: var(--primary-color);
}
</style>