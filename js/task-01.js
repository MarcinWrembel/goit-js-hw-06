'use strict'

const ListCategories = document.querySelectorAll('#categories > li');

console.log(`Number of categories: ${ListCategories.length} `)

const categoryElementsCount = ListCategories.forEach((e)=>{
// console.log(e.children[0].textContent);
console.log(`Category: ${e.querySelector('h2').textContent}\n
Elements: ${e.querySelector('ul').childElementCount}`)
})

/*
Napisz skrypt, który:
policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5
*/
// "\n" dodaje nową linię