<template>
  <div id='carouselExampleIndicators' class='carousel slide'>
    <ol class='carousel-indicators'>
      <li
        v-for='(image,index) in images'
        :key='index'
        :class='index===currentImage ? active : "" '
        @click='currentImage=index'
      />
    </ol>
    <div class='carousel-inner'>
      <div
        v-for='(image,index) in images'
        :key='index'
        class='carousel-item'
        :class='index===currentImage ? active : "" '
      >
        <!--   <transition
          mode='out-in'
          enter-active-class='animated fadeIn'
        >-->
        <img v-if='index===currentImage' :src='image' class='d-block w-100' alt='foto do imóvel' />
        <!-- </transition> -->
      </div>
    </div>
    <a role='button' class='carousel-control-prev' @click='prevImage'>
      <span class='carousel-control-prev-icon' aria-hidden='true'></span>
      <span class='sr-only'>Previous</span>
    </a>
    <a role='button' class='carousel-control-next' @click='nextImage'>
      <span class='carousel-control-next-icon' aria-hidden='true'></span>
      <span class='sr-only'>Next</span>
    </a>
  </div>
</template>

<script>
export default {
  props: ['images'],
  data () {
    return {
      currentImage: 0,
      active: 'active',
      img: [...this.images]
    }
  },
  methods: {
    nextImage () {
      if (this.currentImage < this.images.length - 1) {
        this.currentImage += 1
      } else {
        this.currentImage = 0
      }
    },
    prevImage () {
      if (this.currentImage > 0) {
        this.currentImage--
      } else {
        this.currentImage = this.images.length - 1
      }
    }
  }
}
</script>

<style scoped>
</style>
