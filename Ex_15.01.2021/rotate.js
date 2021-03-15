function rotateArray(input,rot) {
    let rotations = Number(rot);
    //input.pop();
    for(let i = 0; i < rotations; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}

rotateArray(['1', 
'2', 
'3', 
'4',
'128383'], 
3)