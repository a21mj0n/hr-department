export function all(state) {
  return state.staff;
}

export function count(state) {
  return state.staff.length;
}

export function countMale(state, getters) {
  return getters.all.filter(({ gender }) => gender === 'male').length;
}

export function countFemale(state, getters) {
  return getters.all.filter(({ gender }) => gender === 'female').length;
}

export function countBookkeeping(state, getters) {
  return getters.all.filter(({ department }) => department === 'Bookkeeping').length;
}

export function countIT(state, getters) {
  return getters.all.filter(({ department }) => department === 'IT').length;
}

export function countMarketing(state, getters) {
  return getters.all.filter(({ department }) => department === 'Marketing').length;
}

export function employeeInEachDepartment(state, getters) {
  return [
    {
      id: 1,
      name: 'IT',
      icon: 'laptop',
      count: getters.countIT,
    },
    {
      id: 2,
      name: 'Bookkeeping',
      icon: 'file-invoice-dollar',
      count: getters.countBookkeeping,
    },
    {
      id: 3,
      name: 'Marketing',
      icon: 'poll-h',
      count: getters.countMarketing,
    },
  ];
}

export function tableHeaders(state) {
  if (state.staff.length > 0) {
    return Object.keys(state.staff[0]);
  }
}