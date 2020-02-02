<template>
  <div class='card' style='width: 18rem;'>
    <app-carousel :images='imovel.images' ></app-carousel>
    <div class='card-body'>
      <h5 class='card-title'>{{imovel.address.formattedAddress}}</h5>
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item'>{{imovel.price}}</li>
      <li class='list-group-item'>{{imovel.bathrooms}}</li>
      <li class='list-group-item'>{{imovel.parkingSpaces}}</li>
      <li class='list-group-item'>{{imovel.usableArea}}</li>
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

<style>
</style>
