<template>
  <div class="table-responsive p-5">

    <div v-if="toolbar" class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <router-link
          tag="button"
          :to="{ name: 'emp-create' }"
          class="btn btn-success">
          Add
        </router-link>
      </div>
      <div class="d-flex align-items-center">
        <span class="font-weight-bold mr-2">Filter By:</span>
        <div class="form-check mr-2">
          <input
            v-model="gender"
            class="form-check-input"
            type="radio"
            id="exampleRadios1"
            name="filterRadio"
            value="male"
            @change="onChangeRadio"
          >
          <label class="form-check-label" for="exampleRadios1">
            Male
          </label>
        </div>
        <div class="form-check mr-2">
          <input
            v-model="gender"
            class="form-check-input"
            type="radio"
            id="exampleRadios2"
            name="filterRadio"
            value="female"
            @change="onChangeRadio"
          >
          <label class="form-check-label" for="exampleRadios2">
            Female
          </label>
        </div>
        <button
          type="button"
          class="btn btn-outline-success mr-2"
          @click="onFilter"
        >
          Filter
        </button>
        <button
          type="button"
          class="btn btn-outline-info"
          @click="onFilterCancel"
        >
          Cancel
        </button>
      </div>
    </div>
    <table class="table table-sm">
      <thead>
      <tr>
        <th
          v-for="(column, index) in columns"
          :key="index"
          scope="col"
        >
          {{ column.toUpperCase() }}
        </th>
        <th class="text-center">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="row in displayedData"
        :key="row.id"
      >
        <th scope="row">{{ row.id }}</th>
        <td>
          <router-link
            :to="{ name: 'employee', params: { id: row.id } }"
          >
            {{ row.fio }}
          </router-link>
        </td>
        <td>{{ row.department }}</td>
        <td>{{ row.position }}</td>
        <td>{{ row.gender }}</td>
        <td>{{ moment(row.birthday).format('MMMM Do YYYY') }}</td>
        <td>
          <div class="d-flex justify-content-center">
            <router-link
              :to="{ name: 'emp-edit', params: { id: row.id } }"
              tag="button"
              class="btn btn-info btn-sm mr-2"
            >
              Edit
            </router-link>
            <button
              class="btn btn-danger btn-sm"
              @click="onRemove(row.id)"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <nav class="d-flex justify-content-end" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button
            v-if="page !== 1"
            class="page-link"
            @click="page--"
          >
            Previous
          </button>
        </li>
        <li
          v-for="pageNumber in pages.slice(page - 1, page + 5)"
          :key="pageNumber"
          class="page-item"
        >
          <button class="page-link" @click="page = pageNumber">
            {{ pageNumber }}
          </button>
        </li>
        <li class="page-item">
          <button
            v-if="page < pages.length"
            class="page-link"
            @click="page++"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import moment from 'moment';

export default {
  name: 'TableApp',
  props: {
    columns: VueTypes.array.isRequired,
    data: VueTypes.any.isRequired,
    toolbar: VueTypes.bool.def(true),
  },
  computed: {
    displayedData() {
      return this.paginate(this.data);
    },
  },
  data() {
    return {
      gender: '',
      pageLimit: 9,
      page: 1,
      pages: [],
    };
  },
  watch: {
    data() {
      this.setPages();
    },
  },
  methods: {
    setPages() {
      const numberOfPages = Math.ceil(this.data.length / this.pageLimit);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate() {
      const from = (this.page * this.pageLimit) - this.pageLimit;
      const to = (this.page * this.pageLimit);
      return this.data.slice(from, to);
    },
    onChangeRadio(event) {
      this.gender = event.target.value;
    },
    onFilter() {
      this.$emit('filter-gender', this.gender);
    },
    onFilterCancel() {
      this.$emit('filter-cancel');
      this.gender = '';
    },
    onRemove(id) {
      this.$emit('on-remove', id);
    },
    moment,
  },
};
</script>

<style scoped>

</style>
