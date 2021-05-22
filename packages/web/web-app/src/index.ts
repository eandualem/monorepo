import { header, message } from "@monorepo/message";

const app = document.getElementById("app");

const h1 = document.createElement("h1");
h1.textContent = header;
app?.appendChild(h1);

const h2 = document.createElement("h2");
h2.textContent = message;
app?.appendChild(h2);

// const p = document.createElement("p");
// p.textContent = calcHelper(5, 5, 5, 5, 5, 5);
// app?.appendChild(p);
