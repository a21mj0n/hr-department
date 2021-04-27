<template>
  <nav class="navbar navbar-light bg-light">
    <router-link class="navbar-brand" to="/">HR Development</router-link>

    <div class="ml-auto">
      <router-link :to="{ name: 'employees' }">Employee List</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

</style>