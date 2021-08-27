<template>
  <div class="hello">
    <nitro-icon v-if="showCar" name="icarsuite/icarcoins-color" size="64" original-color inline color="muted" @click="showCar = false"></nitro-icon>
    <nitro-icon v-if="showCar" name="dealerships/applicator" size="64" inline @click="showCar = false"></nitro-icon>
    <nitro-icon name="editing/rotate-left" size="32" />
    <button @click="showCar = !showCar">Toggle Car Icon</button>
  </div>
</template>

<script>
import NitroIcon from "./NitroIcon";
export default {
  name: 'HelloWorld',
  components: {NitroIcon},
  props: {
    msg: String
  },
  data(){
    return {
      showCar: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
