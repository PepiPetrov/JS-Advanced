function validate() {
    let nameInput = document.getElementById("username")
    let eInput = document.getElementById('email')
    let pInput = document.getElementById('password')
    let cpInput = document.getElementById('confirm-password')
    let conpanyCheckbox = document.getElementById('company')
    let companyField = document.getElementById('companyInfo')
    let submetBtn = document.getElementById('submit')
    let companyIsclicked = false
    submetBtn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(nameInput);
        let isValidUserName = false
        let isEmailValid = false
        let isValidPass = false
        let isCompanyFieldValue = false
        nameInputValue = nameInput.value
        if (nameInputValue.length >= 3 && nameInputValue.length <= 20) {
            const patternUser = /^[a-zA-Z0-9]*$/gm;
            if (patternUser.test(nameInputValue)) {
                isValidUserName = true
            }
        }
        if (!isValidUserName) {
            nameInput.style.borderColor = 'red'
        } else {
            nameInput.style.border = 'none'
        }
        pinputValue = pInput.value
        cpInputValue = cpInput.value
        if (pinputValue === cpInputValue && pinputValue.length >= 5 && pinputValue.length < 16) {
            const patternUser = /^[a-zA-Z0-9_]*$/gm;
            if (patternUser.test(pinputValue)) {
                isValidPass = true
            }
        }
        if (!isValidPass) {
            pInput.style.borderColor = 'red'
            cpInput.style.borderColor = 'red'
        } else {
            pInput.style.borderColor = 'none'
            cpInput.style.borderColor = 'none'

        }
        eInputInput = eInput.value
        const patternUser = /^[a-zA-Z]+@.*\..*$/gm;
        if (patternUser.test(eInputInput)) {
            isEmailValid = true
        }
        if (!isEmailValid) {
            eInput.style.borderColor = 'red'
        } else {
            eInput.style.borderColor = 'none'
        }
        comField = document.getElementById('companyNumber')
        companyFieldValue = Number(comField.value)
        if (companyFieldValue > 1000 && companyFieldValue <= 9999) {
            isCompanyFieldValue = true
            comField.style.borderColor = 'none'
        } else {
            comField.style.borderColor = 'red'
        }
        if (!companyIsclicked) {
            if (isValidUserName && isEmailValid && isValidPass) {
                divVisible = document.getElementById('valid')
                divVisible.style.display = '';
            }
        } else {
            if (isValidUserName && isEmailValid && isValidPass && isCompanyFieldValue) {
                divVisible = document.getElementById('valid')
                divVisible.style.display = '';
            }
        }
    })
    conpanyCheckbox.addEventListener("change", function (e) {
        e.preventDefault()
        if (this.checked) {
            companyIsclicked = true
            companyField.style.display = "";
        } else {
            companyField.style.display = "none";
        }

    })
}