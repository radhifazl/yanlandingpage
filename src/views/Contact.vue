<template>
  <div class="contact-container page-container">
      <PageTitle :title="'Contact YAN'" />

      <div class="contact-wrapper mt-5">
        <MessageBox/>
        <ContactInfo/>
      </div>
  </div>
</template>

<script>
import PageTitle from "@/components/Title/PageTitle.vue"
import MessageBox from '@/components/MessageBox/MessageBox.vue'
import ContactInfo from '@/components/Contact/ContactInfo.vue'

export default {
  components: { PageTitle, MessageBox, ContactInfo },
  name: 'ContactPage'
}
</script>

<style>
.contact-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 868px) {
    .contact-wrapper {
        flex-direction: column;
    }
}
</style>