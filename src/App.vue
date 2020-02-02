<template>
  <div id='app'>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions(['setImoveis']),
  created () {
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
</style>
