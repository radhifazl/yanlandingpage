<template>
  <div class="message-box-wrapper p-3">
      <div class="box-title">
          <h2>Message YAN Invitation</h2>
      </div>

      <div class="message-box mt-4">
          <form ref="msgForm" @submit.prevent="submitMessage">
              <div class="box-name">
                  <input type="text" 
                    name="sender_name" 
                    id="name" 
                    class="inp-name" 
                    v-model="message.name"
                    placeholder="Nama Lengkap"
                    autocomplete="off"
                  >
              </div>

              <div class="box-msg my-3">
                  <textarea name="message" id="message" v-model="message.msg" placeholder="Pesan / Tanggapan"></textarea>
              </div>

              <div class="buttons-wrapper">
                <SubmitButton :type="'submit'"/>
                <EmailButton @sendEmail="sendEmail">
                    <SendLoading v-if="sendingEmail"/>
                    <span v-else>
                        <img src="@/assets/icons/gmail.svg" width="20" class="icon">
                        Kirim Via Email
                    </span>
                </EmailButton>
                <WhatsappButton @sendWa="sendWa">
                    <span>
                        <img src="@/assets/icons/whatsapp.svg" width="20" class="icon">
                        Kirim Via Whatsapp
                    </span>
                </WhatsappButton>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
import EmailButton from '../Buttons/EmailButton.vue'
import SubmitButton from '../Buttons/SubmitButton.vue'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import SendLoading from '../Loading/SendLoading.vue'
import WhatsappButton from '../Buttons/WhatsappButton.vue'

export default {
  components: { SubmitButton, EmailButton, SendLoading, WhatsappButton },
    name: 'MessageBox',
    data() {
        return {
            message: {
                name: '',
                msg: ''
            },
            sendingEmail: false
        }
    },
    methods: {
        submitMessage() {
            
        },
        sendEmail() {
            if(!this.message.name || !this.message.msg) {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Form kosong, tolong isi semua field!',
                    icon: 'error',
                    confirmButtonText: 'Oke, dimengerti'
                })
            } else {
                const SERVICE_ID = 'service_3zfuw49',
                      TEMPLATE_ID = 'template_4z62iga',
                      PUBLIC_KEY = 'user_7lUuyUh4AqdidlDoRgVq5'

                this.sendingEmail = true

                emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this.$refs.msgForm, PUBLIC_KEY)
                .then(() => {
                    Swal.fire({
                        title: 'Terkirim!',
                        text: 'Pesan anda telah terkirim, kami akan segera menghubungi anda!',
                        icon: 'success',
                        confirmButtonText: 'Oke, terima kasih!'
                    })
                }).catch(err => {
                    Swal.fire({
                        title: err.message,
                        text: 'Gagal mengirim pesan, silahkan coba lagi!',
                        icon: 'error',
                        confirmButtonText: 'Oke, dimengerti'
                    })
                }).finally(() => {
                    this.sendingEmail = false
                })
                this.message.name = ''
                this.message.msg = ''
            }
        },
        sendWa(){
            if(!this.message.msg) {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Form kosong, tolong isi semua field!',
                    icon: 'error',
                    confirmButtonText: 'Oke, dimengerti'
                })
            } else {
                const msg = this.message.msg.split(" ").join('%20');
                window.open(`https://wa.me/6283819801472/?text=${msg}`)
                this.message.name = ''
                this.message.msg = ''
            }
        }
    }
}
</script>

<style scoped>
.message-box-wrapper {
    width: 50%;
    background: var(--primary-color);
    border-radius: 10px;
}

.box-title h2 {
    color: #FAFAFA;
}

.box-name, .box-name input, .box-msg, .box-msg textarea {
    width: 100%;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    background: var(--message-box-bg);
    color: var(--message-box-color);
    transition: all 0.35s ease-in-out;
}

.box-name input {
    height: 2.5rem;
}

.box-msg textarea {
    resize: none;
    height: 200px;
}

.buttons-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.email-btn .icon {
    margin-right: 0.3rem;
}

@media screen and (max-width: 868px) {
    .message-box-wrapper {
        width: 100%;
    }

    .buttons-wrapper {
        flex-wrap: wrap;
        gap: 1rem;
    }
}
</style>