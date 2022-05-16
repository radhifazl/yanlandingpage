<template>
  <button class="submit-btn" :type="type">
      <i class='bx-fw bx bxs-send' ></i> Kirim Pesan
  </button>
</template>

<script>
export default {
    name: 'SubmitButton',
    props: [
        'type'
    ]
}
</script>

<style scoped>
.submit-btn {
    background: var(--send-btn-bg);
    border: 2px solid var(--submit-btn-bg);
    padding: 0.3rem 1rem;
    color: var(--submit-btn-color);
    outline: none;
    font-weight: 500;
    transition: all 0.35s ease-in-out;
}

.submit-btn:hover {
    background: var(--submit-btn-bg);
    border: 2px solid transparent;
    color: var(--primary-color);
}

@media screen and (max-width: 868px) {
    .submit-btn {
        width: 100%;
    }
}
</style>