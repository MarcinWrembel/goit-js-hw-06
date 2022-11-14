function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const parentBox = document.querySelector("div#boxes");
const btnCreateElements = document.querySelector("[data-create]");
const btnDestroyElements = document.querySelector("[data-destroy]");

btnCreateElements.addEventListener("click", () => {
  const boxNumber = document.querySelector('input[type="number"]').value;

  for (let i = 0; i < boxNumber; i++) {
    parentBox.insertAdjacentHTML(
      "afterbegin",
      '<div class="boxes-children"></div>'
    );
  }

  const boxes = Array.from(parentBox.children);

  boxes.reduce((previousValue, e, tableIndex) => {
    let multiplyBy = previousValue;
    e.style.width = 30 + multiplyBy * 10 + "px";
    e.style.height = 30 + multiplyBy * 10 + "px";
    e.style.backgroundColor = getRandomHexColor();
    multiplyBy = previousValue + 1;
    return multiplyBy;
  }, 0);
});

btnDestroyElements.addEventListener('click', () =>
parentBox.replaceChildren())

// element.append(el1, el2, ...) - dodaje jeden lub więcej elementów po wszystkich dzieciach elementu element.
// element.prepend(el1, el2, ...) - dodaje jeden lub więcej elementów przed wszystkimi dziećmi elementu element.
// element.after(el1, el2, ...) - dodaje jeden lub więcej elementów po elemencie element.
// element.before(el1, el2, ...) - dodaje jeden lub więcej elementów przed elementem element.

// "beforebegin" - przed elem
// "afterbegin" - wewnątrz elem, przed wszystkimi dziećmi
// "beforeend" - wewnątrz elem, po wszystkich dzieciach
// "afterend" - po elem

/*
Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów do input i naciska przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Utwórz funkcję createBoxes(amount), która bierze jeden parametr - liczbę. Funkcja tworzy tyle <div>, ile ukazano w amount i dodaje je do div#boxes.

Wymiary pierwszego <div> - 30px na 30px.
Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, tym samym usuwając wszystkie utworzone elementy.
*/
