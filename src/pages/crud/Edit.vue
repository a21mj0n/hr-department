<template>
  <div>
    employeee id {{ employeeId }}
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'Edit',
  props: {
    employeeId: VueTypes.number.isRequired,
  },
};
</script>

<style scoped>

</style>