class Hex{
    constructor(value){
        this.value=value
        this.asHex='0x'+this.value.toString(16).toUpperCase()
    }
    valueOf(){
        return this.value
    }
    toString(){
        return this.asHex
    }
    plus(val){
        return new Hex(this.value+val)
    }
    minus(val){
        return new Hex(this.value-val)
    }
    parse(string){
       return parseInt(string,16)
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(a.parse('0xABCDEF'))