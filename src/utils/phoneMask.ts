export const phoneMask = (inputValue:string) => {
        let maskedValue = ''
        if (inputValue.length <= 1) {
            maskedValue = `+${inputValue}`;
        } else if (inputValue.length <= 4) {
            maskedValue = `+${inputValue.slice(0, 1)}(${inputValue.slice(1, 4)}`;
        } else if (inputValue.length <= 7) {
            maskedValue = `+${inputValue.slice(0, 1)}(${inputValue.slice(1, 4)}) ${inputValue.slice(4, 7)}`;
        } else if (inputValue.length <= 9) {
            maskedValue = `+${inputValue.slice(0, 1)}(${inputValue.slice(1, 4)}) ${inputValue.slice(4, 7)}-${inputValue.slice(7, 9)}`;
        } else if (inputValue.length <= 11) {
            maskedValue = `+${inputValue.slice(0, 1)}(${inputValue.slice(1, 4)}) ${inputValue.slice(4, 7)}-${inputValue.slice(7, 9)}-${inputValue.slice(9, 11)}`;
        } else if (inputValue.length <= 12) {
            maskedValue = `+${inputValue.slice(0, 1)}(${inputValue.slice(1, 4)}) ${inputValue.slice(4, 7)}-${inputValue.slice(7, 9)}-${inputValue.slice(9, 11)}-${inputValue.slice(11)}`;
        }

        return maskedValue;
}