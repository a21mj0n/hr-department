export function count(state) {
  return state.staff.length;
}

export function all(state) {
  return state.staff;
}

export function one(state, getters) {
  return (id) => {
    const employee = getters.all.filter((employee) => employee.id === id);

    return employee ? employee[0] : null;
  };
}

export function tableHeaders(state) {
  if (state.staff.length > 0) {
    return Object.keys(state.staff[0]);
  }
}