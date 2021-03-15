function solve() {
   const author = document.getElementById('creator')
   const title = document.getElementById('title')
   const category = document.getElementById('category')
   const content = document.getElementById('content')
   const button = document.querySelector('button')
   button.addEventListener('click', addArticle)
   function addArticle(e) {
      e.preventDefault()
      const archiveSection = document.getElementsByClassName('archive-section')[0].children[1]
      const sectionToAdd = document.querySelectorAll('section')[1]
      const article = document.createElement('article')
      const authorValue = author.value
      const titleValue = title.value
      const categoryValue = category.value
      const contentValue = content.value
      const h1 = document.createElement('h1')
      h1.textContent = titleValue
      const p = document.createElement('p')
      p.appendChild(document.createTextNode('Category: '))
      const strong = document.createElement('strong')
      strong.textContent = categoryValue
      p.appendChild(strong)
      const creatorP = document.createElement('p')
      creatorP.appendChild(document.createTextNode('Creator: '))
      const nameStrong = document.createElement('strong')
      nameStrong.textContent = authorValue
      creatorP.appendChild(nameStrong)
      const contentP = document.createElement('p')
      contentP.appendChild(document.createTextNode(contentValue))
      const div = document.createElement('div')
      div.classList.add('buttons')
      const deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'Delete'
      deleteBtn.classList.add('btn')
      deleteBtn.classList.add('delete')
      const archiveBtn = document.createElement('button')
      archiveBtn.textContent = 'Archive'
      archiveBtn.classList.add('btn')
      archiveBtn.classList.add('archive')
      div.appendChild(deleteBtn)
      div.appendChild(archiveBtn)
      article.appendChild(h1)
      article.appendChild(p)
      article.appendChild(creatorP)
      article.appendChild(contentP)
      article.appendChild(div)
      sectionToAdd.appendChild(article)
      deleteBtn.addEventListener('click', () => {
         article.remove()
      })
      archiveBtn.addEventListener('click', () => {
         article.remove()
         const li=document.createElement('li')
         li.textContent=titleValue
         archiveSection.appendChild(li)
         sortList(archiveSection)
      })
      function sortList(ul) {
         let sorted = Array.from(ul.getElementsByTagName("li")).sort((a, b) =>
           a.textContent.localeCompare(b.textContent)
         );
         while (ul.firstChild) {
           ul.removeChild(ul.firstChild);
         }
         sorted.forEach((li) => ul.appendChild(li));
       }
   }
}
