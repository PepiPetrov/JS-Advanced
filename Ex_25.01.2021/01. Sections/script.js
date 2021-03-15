function create(words) {
    let contentDiv = document.getElementById('content');
    for (let word of words) {
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.textContent = word;
        paragraph.style.display = 'none';
        div.appendChild(paragraph);
        contentDiv.appendChild(div);
    }
    contentDiv.addEventListener('click', function (ev) {
        const paragraph=ev.target.children[0]
        const isVisible = paragraph.style.display === 'block'
        isVisible ? paragraph.style.display = 'none' : paragraph.style.display = 'block';
    })
}