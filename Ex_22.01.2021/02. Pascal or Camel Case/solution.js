function solve() {
  let text=document.getElementById('text').value
  let caseType=document.getElementById('naming-convention').value
  let result=''
  text=text.split(' ').map((a)=>a.toLowerCase())
  if(caseType==='Camel Case'){
    let words=text.slice(1)
    words=words.map((x)=>{
      x=x.split('')
      x[0]=x[0].toLocaleUpperCase()
      return x.join('')
    })
    words.unshift(text[0])
    text=words
  }else if(caseType=='Pascal Case'){
    text=text.map((x)=>{
      x=x.split('')
      x[0]=x[0].toLocaleUpperCase()
      return x.join('')
    })
  }else{
    text='Error!'.split()
  }
  result=text.join('')
  document.getElementById('result').textContent=result
}