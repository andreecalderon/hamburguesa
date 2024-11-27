import { pan } from "./pan.js";
import { queso } from "./queso.js";
import { tomate } from "./tomate.js";
import { cebolla } from "./cebolla.js";
import { albondigas } from "./albondigas.js";
import { lechuga } from "./lechuga.js";
import { carne } from "./carne.js";
import { pan2 } from "./pan2.js";
import { plato } from "./plato.js";

let root = document.querySelector("#root");

root.appendChild(pan());
root.appendChild(queso());
root.appendChild(tomate());
root.appendChild(queso());
root.appendChild(queso());
root.appendChild(queso());
root.appendChild(cebolla())
root.appendChild(albondigas());
root.appendChild(lechuga());
root.appendChild(carne());
root.appendChild(carne());
root.appendChild(pan2());
root.appendChild(plato());
