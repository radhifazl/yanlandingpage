<template>
  <button class="email-btn" @click="sendEmail">
      <slot/>
  </button>
</template>

<script>
export default {
    name: 'EmailButton',
    methods: {
        sendEmail() {
            this.$emit('sendEmail')
        }
    }
}
</script>

<style scoped>
.email-btn {
    background: var(--message-box-btn-bg);
    border: 2px solid  var(--message-box-btn-bg);
    padding: 0.3rem 1rem;
    color: var(--message-box-btn-color);
    outline: none;
    font-weight: 500;
    transition: all 0.35s ease-in-out;
}

.email-btn:hover {
    background: var(--message-box-btn-bg-hover);
    color: var(--message-box-btn-color-hover);
    border: 2px solid transparent;
}

@media screen and (max-width: 868px) {
    .email-btn {
        width: 100%;
    }
}
</style>