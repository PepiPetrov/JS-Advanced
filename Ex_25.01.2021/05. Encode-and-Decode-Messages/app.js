function encodeAndDecodeMessages() {
    const btns=document.querySelectorAll('button')
    const recieve=btns[1]
    const send=btns[0]
    let message=send.parentNode.children[1].value
    send.addEventListener('click',(ev)=>{
        message=send.parentNode.children[1].value
        message=encrypt(message)
        send.parentNode.children[1].value=''
        recieve.parentNode.children[1].value=message
    })
    recieve.addEventListener('click',(ev)=>{
        recieve.parentNode.children[1].value=decrypt(message)
    })
    function encrypt(message){
        let newMessage=''
        for(let i=0;i<message.length;i++){
            newMessage+=String.fromCharCode(message[i].charCodeAt()+1)
        }
        return newMessage
    }
    function decrypt(message){
        let newMessage=''
        for(let i=0;i<message.length;i++){
            newMessage+=String.fromCharCode(message[i].charCodeAt()-1)
        }
        return newMessage
    }
}