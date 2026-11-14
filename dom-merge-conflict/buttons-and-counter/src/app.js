//increments the number in a node's text
import {main} from "./main";
import {header} from "./head";

function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}
//increments the number in a node's text
function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");

  body.appendChild(header());

  body.appendChild(main());

  const button = body.querySelector("#increment");
  const button1 = body.querySelector("#decrement");

  const counter = body.querySelector("#counter");

  button.addEventListener("click", () => {
    increment(counter);
  });
  button1.addEventListener("click", () => {
    decrement(counter);
  });

  return body;
}
