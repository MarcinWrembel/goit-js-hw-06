const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (update) => 
  !!update.currentTarget.value
    ? (textOutput.textContent = update.currentTarget.value)
    : (textOutput.textContent = "Anonymous")
);



// textInput.addEventListener(
//   "input",
//   (update) => (textOutput.textContent = update.currentTarget.value)
// );

/*
Zadanie 5
Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste, w spanie powinien wyświetlić się komunikat "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/
