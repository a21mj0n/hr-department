<template>
  <div class="p-3">
    <section class="container">
      <div class="row">
        <div class="col-lg-4">
          <dashboard-card
            title="Количество всех сотрдников"
            :count="all"
            icon="users"
            icon-color="text-info"
          />
        </div>
        <div class="col-lg-4">
          <dashboard-card
            title="Количество мужчин"
            :count="maleCount"
            icon="male"
            icon-color="text-dark"
          />
        </div>
        <div class="col-lg-4">
          <dashboard-card
            title="Количество женщин"
            :count="femaleCount"
            icon="female"
            icon-color="text-danger"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-6">
          <dashboard-card
            title="Количество сотрудников в каждом отделе"
            :count="192"
            icon-color="text-success"
            :department-emp-count="inEachDepartment"
          />
        </div>
        <div class="col-lg-6">
          <dashboard-card
            title="Средний возраст сотрудника в компании"
            :count="125"
            icon="sort-numeric-up-alt"
            icon-color="text-warning"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DashboardCard from '../components/DashboardCard';

export default {
  name: 'DashboardPage',
  components: {
    DashboardCard,
  },
  computed: {
    ...mapGetters({
      all: 'staff/count',
      maleCount: 'staff/countMale',
      femaleCount: 'staff/countFemale',
      inEachDepartment: 'staff/employeeInEachDepartment',
    }),
  },
  created() {
    this.$store.dispatch('staff/fetchStaffAll');
  },
};
</script>
