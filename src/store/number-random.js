
let randomNumber = null;

export const numberRandom = () => {
    if (!randomNumber) { 
        randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    }
    return randomNumber;
};