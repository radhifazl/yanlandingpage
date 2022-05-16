<template>
  <button @click="$emit('emitEvent')" class="theme-btn">
       <slot/>
  </button>
</template>

<script>
export default {
    name: 'ThemeButton',
}
</script>

<style scoped>
.nav-menu.open .theme-btn {
  background: var(--primary-color);
  color: #FFFFFF;
}

.theme-btn {
  border: none;
  outline: none;
  background: var(--toggle-bg);
  padding: 0.3rem 1rem;
  border-radius: 30px;
  color: var(--toggle-color);
  transition: all 0.35s ease-in-out;
}

@media screen and (max-width: 868px) {
  .theme-btn {
    margin-left: 1rem;
  }
}
</style>