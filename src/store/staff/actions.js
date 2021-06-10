import http from '../../services/http';


export async function fetchStaffAll({ commit }) {
  const { data: employees } = await http.get('employees');
  commit('setStaff', employees);
}

export async function fetchStaff({ commit }, employees) {
  commit('setStaff', employees);
}

export async function cancel({ commit }) {
  commit('cancelFilter');
}
