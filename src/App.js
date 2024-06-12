import {element} from "./view/html-utlil.js";

console.log("APP");
export class App {
    constructor() {
        console.log("App constructor");
    }

    mount() {
        const formElement = document.querySelector('#js-form');
        const inputElement = document.querySelector('#js-form-input');
        let todoItemCount = 0;
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            const todoItemElement = element`<li>${inputElement.value}</li>`;
            todoListElement.appendChild(todoItemElement);
            render(todoListElement, containerElement);
            todoItemCount += 1;
            todoImteCountElement.textContent = `Todoアイテム数: ${todoItemCount}`;
            inputElement.value = '';
        });
    }
}
