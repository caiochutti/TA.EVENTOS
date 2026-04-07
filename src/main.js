"use strict"

//CSS
import "./styles.css"

import "./libs/dayjs.js"

//JS
import "./modules/form/submit.js"
import { initProductCards } from "./modules/products.js"

// Slideshow + UI interactions
import "../script.js"

// Inicializar funcionalidade dos cartões de produtos
document.addEventListener('DOMContentLoaded', initProductCards);