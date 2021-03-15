function add(a) {
    let sum=0
    sum+=a
    function calc(b){
        sum+=b
        return calc
    }
    calc.toString=()=>sum
    return calc
}
console.log(add(123)(1)(-2000))