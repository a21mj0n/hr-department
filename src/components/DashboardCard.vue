<template>
  <div class="card card-width">
    <div class="card-header d-flex align-items-center justify-content-center text-center">
      <span class="font-weight-bolder">{{ title }}</span>
    </div>
    <div v-if="departmentEmpCount && !icon">
      <ul class="list-group list-group-flush">
        <li
          v-for="department in departmentEmpCount"
          :key="department.id"
          class="list-group-item d-flex justify-content-between"
        >
          <span>
            <font-awesome-icon class="mr-3" :icon="['fas', department.icon ]" />
            {{ department.name }}
          </span>
          <span class="font-weight-bold">{{ department.count }}</span>
        </li>
      </ul>
    </div>
    <div v-else class="card-body d-flex align-items-center">
      <div class="w-50 d-flex justify-content-center">
        <font-awesome-icon :icon="['fas', icon]" :class="['fa-2x', iconColor]" />
      </div>
      <div class="w-50 text-center">
        <h2 class="mb-0">{{ count }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'DashboardCard',
  props: {
    title: VueTypes.string.isRequired,
    count: VueTypes.number.isRequired,
    icon: VueTypes.string,
    iconColor: VueTypes.string.isRequired,
    departmentEmpCount: VueTypes.array,
  },
};
</script>
