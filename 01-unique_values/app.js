// Unique Values
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];

const  categories = ['all',...new Set (menu.map((item) => item.category))]

const result = document.querySelector('.result');
result.innerHTML = categories.map((category) => {
  return `<button>${category}</button>`
}).join('')
console.log(categories);