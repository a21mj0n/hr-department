<template>
  <div class="container">
    <h3 class="text-center">Employee {{ fio }}</h3>
    <form>
      <div class="form-group">
        <label for="fio">FIO</label>
        <input
          v-model="fio"
          type="text"
          class="form-control"
          id="fio"
          placeholder="Enter FIO"
          disabled
        >
      </div>
      <div class="form-group">
        <label for="department">Example select</label>
        <select
          v-model="department"
          class="form-control"
          id="department"
          disabled
        >
          <option>Bookkeeping</option>
          <option>IT</option>
          <option>Marketing</option>
        </select>
      </div>
      <div class="form-group">
        <label for="position">Position</label>
        <input
          v-model="position"
          type="text"
          class="form-control"
          id="position"
          placeholder="Password"
          disabled
        >
      </div>
      <div class="form-group">
        <label for="birthday">Check me out</label>
        <input
          type="date"
          class="form-control"
          id="birthday"
          disabled
          :value="birthday"
          @change="onChangeDate"
        >
      </div>
    </form>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { httpGet } from '../services/http';
import moment from 'moment/moment';

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
    const { data: employee } = await httpGet(`employees/${this.employeeId}`);
    this.fio = employee.fio;
    this.department = employee.department;
    this.position = employee.position;
    this.birthday = moment(employee.birthday).format('yyyy-MM-DD');
  },
  methods: {
    onChangeDate(event) {
      this.birthday = event.target.value;
    },
  },
};
</script>

<style scoped>

</style>