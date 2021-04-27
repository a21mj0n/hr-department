import DashboardPage from '../pages/DashboardPage';
import EmployeePage from '../pages/EmployeePage';
import ErrorPage from '../pages/ErrorPage';
import EmployeesPage from '../pages/crud/Index';
import Create from '../pages/crud/Create';
import Edit from '../pages/crud/Edit';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardPage,
  },
  {
    path: '/employees',
    name: 'employees',
    component: EmployeesPage,
  },
  {
    path: '/employees/:id',
    name: 'employee',
    component: EmployeePage,
    props: (route) => ({ employeeId: route.params.id }),
  },
  {
    path: '/employees/create',
    name: 'emp-create',
    component: Create,
  },
  {
    path: '/employees/edit/:id',
    name: 'emp-edit',
    component: Edit,
    props: (route) => ({ employeeId: route.params.id }),
  },
  {
    path: '*',
    component: ErrorPage,
  },
];

export default routes;