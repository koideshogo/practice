import { element, render  } from "./html-utlil.js";

const oldElement = element`<ul>
    <li>既存の要素</li>
</ul>`;
document.body.appendChild(oldElement);
render(new Element(), document.body);