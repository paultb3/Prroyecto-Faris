import { numberRandom } from "./store/number-random";
import { compareNumber } from "./use-cases/compare-number";
import { renderNumber } from "./use-cases/render-all";

const ElementId = {
    input: '#numberInput',
    button: '#button',
    result: '#resultMessage'
};


/**
 * 
 * @param {HTMLInputElement} element 
 */

const inputElement = (element) => {
    const input = document.querySelector(element);
    const inputValue = parseInt(input.value);

    if (isNaN(inputValue)) {
        throw new Error('El valor ingresado no es un número.');
    }

    const number = numberRandom();
    console.log("Número aleatorio usado:", inputValue);

    const result = compareNumber(inputValue, number);

    
    renderNumber(result, ElementId.result);
};

/**
 * 
 * @param {HTMLButtonElement} element 
 */

export const buttonElement = (element) => {
    element.addEventListener('click', () => {
        try {
            inputElement(ElementId.input);
        } catch (error) {
            renderNumber(error.message, ElementId.result);
        }
    });
};