// People array
const people = [
  {
    name: 'Sebby',
    age: 22,
    position: 'developer',
  },
  {
    name: 'Bravine',
    age: 19,
    position: 'designer',
  },
  {
    name: 'Angie',
    age: 21,
    position: 'Data scientist'
  },
]

const getAges = (person) => person.age*2;

const ages = people.map((getAges))
console.log(ages);

const newpeople = people.map((item) => {
  return {
    firstname: item.name.toUpperCase(),
    oldAge: item.age + 20,
  }
})

const result = document.getElementById("result");
const names = people.map((person) => `<h2>${person.name}</h2>`).join("");

result.innerHTML = names;