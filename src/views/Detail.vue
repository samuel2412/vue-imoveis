<template>
  <div class='container'>
    <!-- <h1>{{imovel.address.formattedAddress}}</h1> -->
    <app-card v-if='imovel' :imovel='imovel' :isDetail='true'/>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  data () {
    return {
      params: this.$router.currentRoute.params.id
    }
  },
  computed: {
    imovel () {
      return this.$store.getters.getImovel({ id: this.params })
    }
  },
  watch: {
    $route (to, from) {
      if (to.path !== this.path) {
        this.params = this.$router.currentRoute.params.id
      }
    }
  },
  components: {
    appCard: Card
  }
}
</script>

<style scocped>
.container {
  width: 90vw;
  margin: auto;
}
</style>
