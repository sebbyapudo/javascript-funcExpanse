// Reduce
// Iterates, call back function
// reduces to a single value - number, array, object
// 1st parameter - ('acc') Total of all calculations
// 2nd parameter - ('curr') Current iteration/value

const staff = [
  {name: 'Sebby', age: 22, position: 'developer', salary: 1000},
  {name: 'Jayson', age: 27, position: 'animator', salary: 2000},
  {name: 'Lewi', age: 22, position: 'animator', salary: 6000},
  {name: 'Oluoch', age: 22, position: 'Developer', designer: 3000},
]

const dailyTotal = staff.reduce((total, person) => {
  console.log(total);
  console.log(person.salary);
  total += person.salary

  return total;
},0);

console.log(dailyTotal);
