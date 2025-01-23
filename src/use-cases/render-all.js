// use-cases/renderError.js

/**
 * @param {number|string} result
 * @param {HTMLParagraphElement} elementId 
 */

export const renderNumber = (message, elementId) => {
    const resultElement = document.querySelector(elementId);
    resultElement.textContent = message;
};


/**
 * 
 * @param {error: String} errorMessage 
 * @param {HTMLParagraphElement} elementId 
 */
export const renderError = (errorMessage, elementId) => {
    const resultElement = document.querySelector(elementId);
    resultElement.textContent = `Error: ${errorMessage}`;
};