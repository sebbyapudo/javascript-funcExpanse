// Filter - returns new array, can manipulatet the size of an array unlike map

const people = [
  {name: 'Sebby', age: '22', position: 'Developer'},
  {name: 'Oluoch', age: '19', position: 'Designer'},
  {name: 'Apudo', age: '21', position: 'Engineer'},
]

// filter
const youngPeople = people.filter((person) => {
  // if(person.age < 20){
  //   return person;
  // }
  // console.log(person);
  return person.age < 20;
})

const developers = people.filter((dev) => {
  console.log(dev.position);
  return dev.position === "Developer"
})

const seniorDevelopers = people.filter(dev => dev.position === 'senior developer')
console.log(seniorDevelopers);