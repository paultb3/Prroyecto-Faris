

export const RESULT_MESSAGE = {
    number: '¡Felicidades! Has adivinado el número.',
    greater: 'El número es menor.',
    lower: 'El número es mayor.'
}

/**
 * 
 * @param {String} name 
 * @returns
 */


const createFactoryError = function (name) {
    return class BusinessError extends Error {
        constructor(message) {
            super(message);
            this.name = name;
        }
    }
}



/**
 * @param {String} message
 */

export const NumberError = createFactoryError('NumberError');