<template>
  <div>
    <gmap-map :center='center' :zoom='12' style='width:100%;  height: 400px;'>
      <gmap-marker
        :key='index'
        v-for='(m, index) in markers'
        :position='m.position'
        @click='center=m.position'
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  props: ['geo'],
  data () {
    return {
      center: { lat: this.geo.lat, lng: this.geo.lng },
      markers: []
    }
  },
  mounted () {
    this.addMarker()
  },
  methods: {
    addMarker () {
      const marker = {
        lat: this.center.lat,
        lng: this.center.lng
      }
      this.markers.push({ position: marker })
    }
  }
}
</script>
