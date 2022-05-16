<template>
  <div class="contact-info-wrapper">
      <div class="contact-title">
          <h4>YAN Contact Info :</h4>
      </div>

      <ul class="contact-list">
          <li>
              <a href="">
                  <img src="@/assets/icons/whatsapp.svg" alt="WA">
                  <span>083819801472</span>
              </a>
          </li>
          <li>
              <a href="">
                  <img src="@/assets/icons/instagram.svg" alt="IG">
                  <span>YANInvitation</span>
              </a>
          </li>
          <li>
              <a href="">
                  <img src="@/assets/icons/gmail.svg" alt="GM" width="28">
                  <span>YANInvitation@yan.id</span>
              </a>
          </li>
          <li>
              <a href="">
                  <img src="@/assets/icons/telegram.svg" alt="TG" width="28">
                  <span>YANInvitation</span>
              </a>
          </li>
          <li>
              <a href="">
                  <img src="@/assets/icons/line.svg" alt="LN" width="28">
                  <span>YANInvs</span>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'ContactInfo'
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
</style>