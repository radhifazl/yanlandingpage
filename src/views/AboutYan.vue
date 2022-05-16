<template>
  <div class="about-container w-100">
      <div class="about-content">
          <p>
            YAN Invitation menawarkan fitur-fitur yang siap digunakan dan di aplikasikan ke dalam undangan kamu,
            berikut ini adalah beberapa fitur terbaik dari semua fitur yang YAN Invitation sediakan :
            <br>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore assumenda, odio dolorum corporis 
            sed eaque exercitationem laudantium? Cupiditate qui, 
            quam maxime dolor labore excepturi vero non molestiae itaque et explicabo!
          </p>

            <router-link to="/">
                Get Back
            </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AboutYan'
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
</style>