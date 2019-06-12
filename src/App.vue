<template>
  <div id="app">
    <input v-model="inputValue">

    <select v-model="selectValue">
      <option :value="undefined">THIS SHOULDN'T DISPLAY</option>
      <option value="initial">Initial value</option>
      <option value="yes">Changed value</option>
    </select>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: () => ({
    inputValue: 'hello world',
    selectValue: 'initial'
  }),
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}

input, select {
  display: block;
  margin: 0 auto;
  font-size: 30px;
  margin-top: 30px;
}
</style>
