let text = document.getElementById('text')
let buttonEncrypt = document.getElementById('b-encrypt')
let buttonDesEncrypt = document.getElementById('b-desencrypt')
let textContainer = document.getElementById('text-container')
let notContent = document.getElementById('not-content')

buttonEncrypt.addEventListener('click', encriptar)

const letters = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

function encriptar() {
    const value = text.value
    if (value == "") return 
    const textValues = value.split('')
    const array = textValues.map((letter) => 
        letters[letter] != undefined ? 
            letter.replace(letter, letters[letter]) : 
            letter
    )
    textContainer.textContent = array.join('')
    notContent.style.display = 'none'

}


