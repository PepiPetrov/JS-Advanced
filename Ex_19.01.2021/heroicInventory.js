function heroicInventory(arr){
    let result=[]
    for(let hero of arr){
        let [name,level,itemsString]=hero.split(' / ')
        level=Number(level)
        let obj={name,level,items:itemsString?itemsString.split(', '):[]}
        result.push(obj)
    }
    console.log(JSON.stringify(result))
}

heroicInventory(['Peter / 1000 / books, gun'])