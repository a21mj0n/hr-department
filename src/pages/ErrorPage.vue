<template>
  <div>
    <h1>This is error page</h1>
    <router-link tag="span" :to="{ name: 'dashboard' }">
      Go to Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
};
</script>

<style scoped>

</style>