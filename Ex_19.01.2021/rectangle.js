function rectangle(width,height,color){
    color=color.split('')
    color[0]=color[0].toLocaleUpperCase()
    color=color.join('')
    let obj={width,height,color,calcArea(){
     return this.width*this.height
    }}
    return obj
}
let rect=rectangle(2,2,'жълт')
console.log(rect.color)