import { httpGet } from '../../services/http';


export async function fetchStaffAll({ commit }) {
  const { data: employees } = await httpGet('employees');
  commit('setStaff', employees);
}

export async function fetchStaff({ commit }, employees) {
  commit('setStaff', employees);
}

export async function cancel({ commit }) {
  commit('cancelFilter');
}
