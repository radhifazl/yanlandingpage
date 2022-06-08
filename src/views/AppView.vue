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
  },
  mounted() {
    const initUserTheme = this.getMode() || this.getMediaPreference()
    this.setMode(initUserTheme)
  }
}
</script>
