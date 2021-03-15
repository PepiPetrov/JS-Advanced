function names(arr){
    arr.sort((a,b)=>a.localeCompare(b)).forEach(element => {
        console.log(`${arr.indexOf(element)+1}.${element}`)
    });
}
names(["John", "Bob", "Christina", "Ema"])