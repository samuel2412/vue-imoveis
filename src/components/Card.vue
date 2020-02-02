<template>
  <div class='card'>
    <app-carousel :images='imovel.images' :id='imovel.id'></app-carousel>
    <div class='card-body'>
      <h5 class='card-title'>{{imovel.address.formattedAddress}}</h5>
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item'>
        <span>
          <i class='material-icons'>attach_money</i>
          {{imovel.price | currency}}
        </span>
      </li>
      <li class='list-group-item'>
        <span>
          <i class='material-icons'>home</i>
          {{imovel.usableArea}}m²
        </span>
      </li>
      <li v-if='isDetail' class='list-group-item'>
        <span>
          <i class='material-icons'>hotel</i>
          {{imovel.bedrooms}}
        </span>
      </li>
      <li v-if='isDetail' class='list-group-item'>
        <span>
          <i class='material-icons'>bathtub</i>
          {{imovel.bathrooms}}
        </span>
      </li>
      <li v-if='isDetail' class='list-group-item'>
        <span>
          <i class='material-icons'>drive_eta</i>
          {{imovel.parkingSpaces}}
        </span>
      </li>
      <li v-if='isDetail' class='list-group-item'>
        <google-map :geo='imovel.address.geolocation'/>
      </li>
    </ul>
    <div class='card-body'>
      <router-link
        v-if='!isDetail'
        class='btn btn-success'
        tag='button'
        :to='"/detail/"+imovel.id'
      >See more</router-link>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import GoogleMap from './GoogleMap.vue'
export default {
  props: ['imovel', 'isDetail'],
  components: {
    appCarousel: Carousel,
    googleMap: GoogleMap
  }
}
</script>

<style scoped>
.card {
  box-shadow: 2px 2px 3px grey;
}
span {
  font-size: 20px;
}
.material-icons,
.icon-text {
  vertical-align: sub;
  color: #28a745;
}
.details {
  text-transform: uppercase;
  margin: 10px;
  flex-direction: column;
}
</style>
