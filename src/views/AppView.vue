<template>
  <div class="app-view" :class="mode === 'Dark' ? 'Dark' : 'Light'">
    <Navbar @changeMode="changeMode" :mode="mode"/>
    <Home id="home"/>
    <Features id="fitur"/>
    <Themes id="tema"/>
    <Pricing id="harga"/>
    <Contact id="contact"/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import Contact from '@/views/Contact.vue'
import Features from '@/views/Features.vue'
import Home from '@/views/Home.vue'
import Pricing from '@/views/Pricing.vue'
import Themes from '@/views/Themes.vue'
import { firestore } from "@/firebase";
import { addDoc, collection, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { getDate } from "@/components/Date";

export default {
  name: 'AppView',
  data () {
    return {
      mode: 'Light',
    }
  },
  components: {
    Navbar,
    Home,
    Features,
    Themes,
    Pricing,
    Contact,
    Footer
  },
  methods: {
    setMode (theme) {
      localStorage.setItem('mode', theme)
      this.mode = theme
      document.documentElement.className = theme
    },
    getMode () {
      return localStorage.getItem('mode')
    },
    changeMode () {
      const mode = localStorage.getItem('mode')
      if (mode === 'Light') {
        this.setMode('Dark')
      } else {
        this.setMode('Light')
      }
    },
    getMediaPreference () {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      if(hasDarkPreference) {
        return 'Dark'
      } else {
        return 'Light'
      }
    },
    async getLiveVisitCount() {
      const colRef = collection(firestore, 'userIP')
      const q = query(colRef, where('ip', '==', localStorage.getItem('ip')))

      await getDocs(q)
      .then(docs => {
        docs.forEach(async doc => {
          if(!doc.exists()) {
            await fetch('https://api.countapi.xyz/update/yanpage/landingpage/?amount=1')
            .then(response => response.json())
            .then(async data => {
              const visitRef = doc(firestore, 'webvisit', getDate(new Date()))
              await setDoc(visitRef, {
                ip: localStorage.getItem('ip'),
                count: data.value,
                date: getDate(new Date()),
                month: new Date().getMonth() + 1
              })
            })
          } else {
            console.log('IP already exists')
          }
        })
      })
    }
  },
  async mounted() {
    const initUserTheme = this.getMode() || this.getMediaPreference()
    this.setMode(initUserTheme)

    await fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(async data => {
      localStorage.setItem('ip', data.ip)
      await setDoc(doc(firestore, 'userIP', data.ip), {
        ip: data.ip,
      })
    })
    
    this.getLiveVisitCount()
  }
}
</script>
