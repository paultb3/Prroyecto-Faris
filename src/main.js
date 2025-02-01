import './style.css'


import { buttonElement } from './random.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Adivina tu numero!</h1>
    <div class="card">
        <label for="numberInput">Ingresa un número:</label>
        <input type="number" id="numberInput" placeholder="Escribe un número" />
        <button id="button">Verificar</button>
        <p id="resultMessage"></p>
    </div>
  </div>
`


buttonElement(button)
