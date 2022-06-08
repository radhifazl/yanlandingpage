<template>
  <div class="contact-info-wrapper">
      <div class="contact-title">
          <h4>YAN Contact Info :</h4>
      </div>

      <ul class="contact-list">
          <li v-for="(contact, i) in contacts" :key="i">
              <a :href="contact.link" class="d-flex justify-content-start">
                  <span class="media-name">{{ contact.media }}</span>
                  <span>{{ contact.name }}</span>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { collection, doc, getDocs } from '@firebase/firestore'
import { firestore } from '@/firebase'
export default {
    name: 'ContactInfo',
    setup () {
        const socialMedia = ref(['whatsapp', 'instagram', 'email', 'telegram', 'line'])
        const contacts = ref([])

        const getContactsInfo = () => {
            socialMedia.value.forEach(media => {
                const colRef = collection(firestore, 'contact', 'yanpage_contact', media)
                getDocs(colRef)
                  .then(docs => {
                      docs.forEach(doc => {
                          contacts.value.push({
                              ...doc.data(),
                              media: media
                          })
                      })
                  })
            })
        }

        onMounted(() => {
            getContactsInfo()
        })

        return {
            contacts,
            socialMedia
        }
    },
}
</script>

<style scoped>
.contact-info-wrapper {
    width: 50%;
    padding: 1rem;
    padding-left: 3rem;
}

@media screen and (max-width: 868px) {
    .contact-info-wrapper {
        width: 100%;
        margin-top: 2rem;
    }
}

.contact-title h4 {
    color: var(--secondary-color);
}

.contact-list {
    padding: 0;
    margin-left: -1rem;
    margin-top: 2rem;
}

.contact-list li {
    margin-bottom: 1.5rem;
}

.contact-list li a {
    text-decoration: none;
}

.contact-list li a span {
    margin-left: 1.5rem;
    color: var(--secondary-color);
}

.media-name {
    width: 100px;
    position: relative;
    text-transform: capitalize;
    color: var(--primary-color);
}

.media-name::after {
    content: ':';
    position: absolute;
    right: 0;
    top: 0;
}
</style>