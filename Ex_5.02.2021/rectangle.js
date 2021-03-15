class Rectangle{
    constructor(width,height,color){
        this.width=width
        this.height=height
        let spl=color.split('')
        spl[0]=spl[0].toLocaleUpperCase()
        color=spl.join('')
        this.color=color
    }
    set width(val){
        this.width=val
    }
    set height(val){
        this.height=val
    }
    set color(val){
        let spl=val.split('')
        spl[0]=spl[0].toLocaleUpperCase()
        val=spl.join('')
        this.color=val
    }
    calcArea(){
        return this.width*this.height
    }
}