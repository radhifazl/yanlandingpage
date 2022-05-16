<template>
  <div class="page-title">
      <h1>
          // {{ title }}
      </h1>
  </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.page-title h1 {
    color: var(--primary-color);
    font-weight: 600;
}
</style>