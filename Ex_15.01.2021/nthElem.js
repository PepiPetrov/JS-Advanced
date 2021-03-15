function nthElem(arr,num){
    let result=[]
   for(let i=0;i<arr.length;i++){
       if(i%num==0){
           result.push(arr[i])
       }
   }
   return result
}

console.log(nthElem([1,2,3,4,5,6],2))