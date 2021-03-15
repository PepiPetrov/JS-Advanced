class Stringer {
    constructor(str,len){
        this.innerString=str
        this.innerLength=len
    }
    increase(num){
        this.innerLength+=num
    }
    decrease(num){
        this.innerLength-=num
        if(this.innerLength<0){
            this.innerLength=0
        }
    }
    toString(){
        return this.innerString.length<=this.innerLength?
        this.innerString:
        this.innerString.slice(0,this.innerLength)+'...'
    }
}