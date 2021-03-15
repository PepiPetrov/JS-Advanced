function sortArray(arr,type){
    return type=='asc'?asc(arr):desc(arr)
    function asc(arr){
        return arr.sort((a,b)=>a-b)
    }
    function desc(arr){
        return arr.sort((a,b)=>b-a)
    }
}