import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import { buttonElement } from './random.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
        <label for="numberInput">Ingresa un número:</label>
        <input type="number" id="numberInput" placeholder="Escribe un número" />
        <button id="button">Verificar</button>
        <p id="resultMessage"></p>
    </div>
  </div>
`


buttonElement(button)
