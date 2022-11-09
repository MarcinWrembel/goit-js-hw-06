const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const mainList = document.querySelector('#ingredients')

// 1. Sposób
// const createListItems = ingredients.forEach( (e) => {
//   const listItem = document.createElement('li');
//   listItem.textContent = e;
//   listItem.setAttribute('class','item');
//   console.log(listItem);
//   mainList.append(listItem)
//   })

  // 2. Sposób
  const createListItems = ingredients
  .map((element) => `<li class="item">${element}</li>`)
  .join("");
// console.log(createListItems)
mainList.insertAdjacentHTML("beforeend", createListItems);


/*
Napisz skrypt, który dla każdego elementu tablicy ingredients:
Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
Doda nazwę elementu jako jego zawartość tekstową.
Doda do elementu klasę item.
Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.
*/