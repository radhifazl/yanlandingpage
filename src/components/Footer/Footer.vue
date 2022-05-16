<template>
  <footer class="footer w-100 d-flex flex-column align-items-center p-3 bg-dark">
      <span class="footer-text text-center">
        Made by <a href="">YAN Invitation</a> & <br class="d-lg-none"> <a href="">SMKN 4 KOTA BOGOR</a>
      </span>
      <span class="footer-text-2 mt-3">Copyrights 2022, all rights reserved.</span>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp'
}
</script>

<style scoped>
span {
  color: var(--secondary-color);
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

.footer-text-2 {
  font-weight: 300;
}
</style>