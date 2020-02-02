<template>
  <div :id='"carousel"+id' class='carousel slide' data-ride='carousel'>
    <ol class='carousel-indicators'>
      <li
        v-for='(image,index) in images'
        :key='index'
        :data-target='id|ref'
        :data-slide-to='index'
        class='active'
      ></li>
    </ol>
    <div class='carousel-inner'>
      <div
        class='carousel-item'
        :class='{ active: index==0 }'
        v-for='(image,index) in images'
        :key='index'
      >
        <img :src='image' class='d-block w-100' alt='foto do imóvel' />
      </div>
    </div>
    <a class='carousel-control-prev' :href='id|ref' role='button' data-slide='prev'>
      <span class='carousel-control-prev-icon' aria-hidden='true'></span>
      <span class='sr-only'>Previous</span>
    </a>
    <a class='carousel-control-next' :href='id|ref' role='button' data-slide='next'>
      <span class='carousel-control-next-icon' aria-hidden='true'></span>
      <span class='sr-only'>Next</span>
    </a>
  </div>
</template>

<script>
export default {
  props: ['images', 'id'],
  filters: {
    ref (value) {
      return '#carousel' + value
    }
  }
}
</script>

<style>
</style>
