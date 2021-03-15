function create(words) {
    let contentDiv = document.getElementById('content');
    for (let word of words) {
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.textContent = word;
        paragraph.style.display = 'none';
        div.appendChild(paragraph);
        div.addEventListener('mouseover',(e)=>{
        paragraph.style.display='block'
        })
        div.addEventListener('mouseleave',(e)=>{
            paragraph.style.display='none'
        })
        contentDiv.appendChild(div);
    }
}