<template>
  <div>
    <app-navbar></app-navbar>
    <app-card v-for='imovel in imoveis' :key='imovel.id' :imovel='imovel' ></app-card>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'

export default {
  computed: {
    imoveis () {
      return this.$store.getters.getImoveis
    }
  },
  components: {
    appCard: Card,
    appNavbar: Navbar
  }
}
</script>

<style scocped>
</style>
