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
      <!--      <li class='list-group-item'>{{imovel.bathrooms}}</li>
      <li class='list-group-item'>{{imovel.parkingSpaces}}</li>-->
    </ul>
    <div class='card-body'>
      <button class='btn btn-success'>See more</button>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
export default {
  props: ['imovel'],
  components: {
    appCarousel: Carousel
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
}
</style>
