<template>
  <div id='app'>
    <app-navbar></app-navbar>
    <router-view class='router'/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { mapActions } from 'vuex'
export default {
  methods: mapActions(['setImoveis']),
  components: {
    appNavbar: Navbar
  },
  beforeCreate () {
    this.$http
      .get('http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge')
      .then(response => {
        this.setImoveis({ data: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router{
  margin: 20px;
}
</style>
