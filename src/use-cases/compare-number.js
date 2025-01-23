import { RESULT_MESSAGE } from "../validate";

export const compareNumber = (inputNumber, number) => {
        const result =
            inputNumber === number ? RESULT_MESSAGE.number :
            inputNumber > number ? RESULT_MESSAGE.greater :
            RESULT_MESSAGE.lower;
            
        return result;
}