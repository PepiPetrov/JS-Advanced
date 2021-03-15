function sort(input) {
    let array = input.map(Number).sort((a, b)=>b-a)
    let arrayCopy = array.slice(0);
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(arrayCopy[arrayCopy.length - 1]);
        if (result.length === array.length) {
            break;
        }
        result.push(arrayCopy[0]);
        if (result.length === array.length) {
            break;
        }
        arrayCopy.shift();
        arrayCopy.pop();
    }
    return result
}
sort([1, 10, 9, 15, 2, 3, 4]);