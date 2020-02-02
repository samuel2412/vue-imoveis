<template>
  <div class='container'>
    <div class='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
      <div class='col mb-4' v-for='imovel in imoveis' :key='imovel.id' :imovel='imovel'>
        <app-card :imovel='imovel' />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  computed: {
    imoveis () {
      return this.$store.getters.getImoveis
    }
  },
  components: {
    appCard: Card
  }
}
</script>

<style scocped>
.container{
  width: 90vw;
  margin: auto;
}
</style>
