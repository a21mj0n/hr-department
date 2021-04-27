export function setStaff(state, getStaff) {
  return state.staff = getStaff;
}

export function cancelFilter(state) {
  return state.staff = [];
}