
// Dynamic property keys 
const person = {
  name: "Sebby",
};
console.log(person['name']);
person.age = 22;
console.log(person);

const items = {
  'featured-items': ['item1', 'Item2', 'Item3'],
};

console.log(items["featured-items"]);

let appState = 'loading';
appState = 'error'
const keyName = 'computer'

const app = {
  [appState]: true
}

app[keyName] = 'apple'
console.log(app);

const state = {
  laoding:true,
  name: '',
  job: '',
}

function updateState(key,value){
  state[key] = value;
}

updateState('name','Sebby')
updateState('job','Developer')
updateState('loading','false')
updateState('products',[])
console.log(state);