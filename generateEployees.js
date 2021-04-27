const faker = require('Faker');

function generateEmployees() {
  const employees = [];
  for (let id = 1; id < 50; id++) {
    const fio = faker.Name.firstName() + ' ' + faker.Name.lastName();
    const department = faker.random.array_element(['Bookkeeping', 'IT', 'Marketing']);
    const position = faker.random.array_element(['Director', 'Accountant', 'Employee', 'Manager']);
    const gender = faker.random.array_element(['male', 'female']);
    const birthday = faker.Date.between(1990, 2000);
    employees.push({
      id,
      fio,
      department,
      position,
      gender,
      birthday,
    });
  }
  return { 'employees': employees };
}

module.exports = generateEmployees;