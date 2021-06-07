<template>
  <div class="container">
    <h3 class="text-center">Employee</h3>
    <form @submit.prevent="onCreate">
      <div class="form-group">
        <label for="fio">FIO</label>
        <input
          v-model="fio"
          type="text"
          class="form-control"
          id="fio"
          placeholder="Enter FIO"
        >
      </div>
      <div class="form-group">
        <label for="department">Department</label>
        <select
          v-model="department"
          class="form-control"
          id="department"
        >
          <option>Bookkeeping</option>
          <option>IT</option>
          <option>Marketing</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <select
          v-model="gender"
          class="form-control"
          id="gender"
        >
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div class="form-group">
        <label for="position">Position</label>
        <input
          v-model="position"
          type="text"
          class="form-control"
          id="position"
          placeholder="Position"
        >
      </div>
      <div class="form-group">
        <label for="birthday">Check me out</label>
        <input
          type="date"
          class="form-control"
          id="birthday"
          :value="birthday"
          @change="onChangeDate"
        >
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { httpPost } from '../../services/http';

export default {
  name: 'Create',
  data() {
    return {
      fio: null,
      department: 'Choose your department',
      position: null,
      birthday: null,
      gender: null,
      error: null,
    };
  },
  methods: {
    onChangeDate(event) {
      this.birthday = event.target.value;
    },
    async onCreate() {
      try {
        await httpPost('employees', {
          fio: this.fio,
          department: this.department,
          position: this.position,
          birthday: this.birthday,
          gender: this.gender,
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