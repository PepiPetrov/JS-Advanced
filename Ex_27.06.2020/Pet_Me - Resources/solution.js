function solve() {
    // TODO ...
    const form = document.getElementById('container');
    const petsList = document.querySelector('#adoption > ul');
    const adoptedList = document.querySelector('#adopted > ul');
 
    let [name, age, kind, owner, addBtn] = Array.from(form.children);
    addBtn.addEventListener('click', addPet);
 
    function addPet(e) {
        e.preventDefault();
        if (!(name.value && Number(age.value) && kind.value && owner.value)) {
            return;
        }        
 
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`
        let sOwner = document.createElement('span');
        sOwner.textContent = `Owner: ${owner.value}`;
        let contactBtn = document.createElement('button');
        contactBtn.textContent = 'Contact with owner';
 
        li.appendChild(p);
        li.appendChild(sOwner);
        li.appendChild(contactBtn);
        petsList.appendChild(li);
 
        contactBtn.addEventListener('click', makeContact);
    }
 
    function makeContact(e) {
        const parent = e.target.parentElement;
        e.target.remove();
 
        const takeBtn = el('button');
        takeBtn.textContent = 'Yes! I take it!';
 
        const div = el('div');
        const inputEl = el('input', '', { placeholder: 'Enter your names' });
 
        div.appendChild(inputEl);
        div.appendChild(takeBtn);
 
        parent.appendChild(div);
 
        takeBtn.addEventListener('click', (e) => {
            if (!inputEl.value) { return; }
 
            e.target.textContent = 'Checked';
            adoptedList.appendChild(e.target.parentElement.parentElement);
 
            const span = e.target.parentElement.parentElement.querySelector('span');
            span.textContent = `New Owner: ${inputEl.value}`;
 
            const checkBtn = el('button', 'Checked');
            e.target.parentElement.parentElement.appendChild(checkBtn);
            e.target.parentElement.remove();
 
            checkBtn.addEventListener('click', (ev) => {
                ev.target.parentElement.remove();
            });
        });
    }
    function el(type, content, attributes) {
        let result = document.createElement(type);
        if (content) {
            result.textContent = content;
        }
        if (attributes) {
            Object.assign(result, attributes);
        }
        return result;
    }
}