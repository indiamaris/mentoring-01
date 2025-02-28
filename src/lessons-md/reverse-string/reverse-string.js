const strings = '12345'
const reversedSimple =(str)=> str.split('').reverse().join('')

//bad aproach in case the string has the comma simbol
const reversed =(str)=>str.split('').reverse().toString().replaceAll(',','')

const stringReverser = (str) => {
    let counter = 0;
    let reversedChars = [];

    while (counter < str.length) {
        reversedChars.push(str[str.length - 1 - counter]);
        counter += 1;
    }
    return reversedChars.join('');
};
const str1 = '2345'

const stringReverserIII = (str) => {
    // Base case: If the string is empty, return an empty string
    if (str === "") {
        return "";
    }
    return str[str.length - 1] + stringReverser(str.slice(0, -1));
};

const stringReverserIIII = (str) => {   
    if (str === "") {
        return "";
    }
   // Recursive case: Return the last character + recursively reverse the rest of the string
    return stringReverserIIII(str.slice(1)) + str[ 0 ];
    
};

// This approach is both simple and efficient, using a single loop and no recursion. It’s also easier to understand and suitable for reversing larger strings without running into potential stack overflow issues caused by recursion.
const stringReverserLoop = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};


w