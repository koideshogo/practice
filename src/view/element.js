import { element } from "./html-utlil";

const newElement = element`<ul>
    <li>新しい要素</li>
</ul>`;
document.body.appendChild(newElement);