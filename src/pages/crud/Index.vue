<template>
  <div class="container-fluid">
    <table-app
      ref="dataTable"
      :data="data"
      :columns="columns"
      @filter-gender="filterGender"
      @filter-cancel="onCancel"
      @on-remove="onRemove($event)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TableApp from '../../components/TableApp';
import { httpGet, remove } from '../../services/http';

export default {
  name: 'Index',
  components: {
    TableApp,
  },
  data() {
    return {
      filteredGenders: null,
    };
  },
  computed: {
    ...mapGetters({
      columns: 'staff/tableHeaders',
      data: 'staff/all',
    }),
  },
  async created() {
    const { data: employees } = await httpGet('employees');
    await this.$store.dispatch('staff/fetchStaff', employees);
  },
  methods: {
    async filterGender(gender) {
      const { data: filteredByGender } = await httpGet(`employees`, {
        gender,
      });
      await this.$store.dispatch('staff/fetchStaff', filteredByGender);
    },
    async onCancel() {
      await this.$store.dispatch('staff/fetchStaffAll');
    },
    async onRemove(id) {
      await remove('employees', id);
      await this.$store.dispatch('staff/fetchStaffAll');
    },
  },
};
</script>

<style scoped>

</style>