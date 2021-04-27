<template>
  <div class="container">
    <h3 class="text-center">Employee {{ fio }}</h3>
    <form>
      <div class="form-group">
        <label for="fio">FIO</label>
        <input v-model="fio" type="text" class="form-control" id="fio" placeholder="Enter FIO">
      </div>
      <div class="form-group">
        <label for="department">Example select</label>
        <select v-model="department" class="form-control" id="department">
          <option>Bookkeeping</option>
          <option>IT</option>
          <option>Marketing</option>
        </select>
      </div>
      <div class="form-group">
        <label for="position">Position</label>
        <input v-model="position" type="text" class="form-control" id="position" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="birthday">Check me out</label>
        <input
          v-model="birthday"
          type="date"
          class="form-control"
          id="birthday"
          @change="onChangeDate"
        >
      </div>
      <button class="btn btn-primary" @click="onSubmit">Submit</button>
    </form>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { httpGet, put } from '../services/http';

export default {
  name: 'EmployeePage',
  props: {
    employeeId: VueTypes.any.isRequired,
  },
  data() {
    return {
      fio: null,
      department: 'Choose your department',
      position: null,
      birthday: null,
      error: null,
    };
  },
  async created() {
    const { data: employee } = await httpGet('employees', {
      id: this.employeeId,
    });
    this.fio = employee[0].fio;
    this.department = employee[0].department;
    this.position = employee[0].position;
    this.birthday = employee[0].birthday;
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      try {
        await put('employees', this.employeeId, {
          fio: this.fio,
          department: this.department,
          position: this.position,
          birthday: this.birthday,
        });
        await this.$router.push({ name: 'employees' });
      } catch (e) {
        this.error = e.response;
      }
    },
  },
};
</script>

<style scoped>

</style>