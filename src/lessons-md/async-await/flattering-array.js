const array = [ 1, 2, [ 3, 4, [ 5, 6, 7 ], 8 ], 9, 10 ];
const flatter = (arr) => { 
    const flatered = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (!Array.isArray(element)) {
            flatered.push(element);
        } else {
            flatered.push(...flatter(element));
            // Here I will to capture, to get, the result of recursion and flatten it
        }
    }
    return flatered;
}

const flatterReduced = (arr) => {
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(flatterReduced(val)) : acc.concat(val);
    }, []);
}

const flatterIII = (arr) => {
    const flatered = [];
    const stack = [...arr];  // Start with the array inside a stack

    while (stack.length) {
        const element = stack.pop();  // Remove last element (LIFO)
        
        if (Array.isArray(element)) {
            stack.push(...element);  // Spread and push the array into the stack
        } else {
            flatered.unshift(element);  // Add non-array elements to the front
        }
    }
    return flatered;
}



