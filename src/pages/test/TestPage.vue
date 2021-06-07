<template>
  <div>
    <!-- SOURCE -->
    <div id="printMe">
      <h1>Print me!</h1>
    </div>
    <!-- OUTPUT -->
    <button @click="print"></button>
  </div>
</template>

<script>
  import {htmlToPaper} from 'vue-html-to-paper'

  export default {
    name: "TestPage",
    data() {
      return {
        output: null
      }
    },
    methods: {
      async print() {
        // Pass the element id here
        await htmlToPaper('printMe');
      }
    }
  }
</script>

<style scoped>

</style>