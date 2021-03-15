function addRemove(arr){
    let result=[]
    let num=1;
    for(let j=0;j<arr.length;j++){
        if(arr[j]=='add'){
            result.push(num)
            num++
        }else if(arr[j]=='remove'){
            result.pop()
        }
    }
    return result.length>0?result.join('\n'):'Empty'
}
console.log(addRemove(['add', 
'add', 
'remove', 
'add', 
'add']))