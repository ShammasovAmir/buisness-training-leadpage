import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1IjoiYW1pcnNoYW1tYXNvdiIsImEiOiJja3E5NWFkaGYwZGI5Mndwa2ZyM3VjNHVuIn0.4QkWjih55uwGIbjWGH28wg'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.060982, 42.35725],
  zoom: 18,
})

export default map
