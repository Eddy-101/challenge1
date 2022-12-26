let text = document.getElementById('text')
let buttonEncrypt = document.getElementById('b-encrypt')
let buttonDesEncrypt = document.getElementById('b-desencrypt')
let textContainer = document.getElementById('text-container')
let notContent = document.getElementById('not-content')
let textContent = document.getElementById('text-content')
let buttonCopy = document.getElementById('copy')

const encryptLetters = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
}

buttonEncrypt.addEventListener('click', encriptar)
buttonDesEncrypt.addEventListener('click', desencriptar)
buttonCopy.addEventListener('click', copy)
text.addEventListener('keyup', reset)


function encriptar() {
    const value = text.value
    if (value == "") return 
    const textValues = value.split('')
    const array = textValues.map((letter) => 
        encryptLetters[letter] != undefined ? 
            letter.replace(letter, encryptLetters[letter]) : 
            letter
    )
    textContainer.textContent = array.join('')
    notContent.style.display = 'none'
    textContent.style.display = 'flex'
}

function desencriptar() {
    const value = text.value
    if (value == "") return 
    const newValue = value.replaceAll('ai', 'a')
                    .replaceAll('enter', 'e')
                    .replaceAll('imes', 'i')
                    .replaceAll('ober', 'o')
                    .replaceAll('ufat', 'u')
    textContainer.textContent = newValue
    notContent.style.display = 'none'
    textContent.style.display = 'flex'
}

function reset(e) {
    if (e.target.value != "") return
    notContent.style.display = 'block'
    textContent.style.display = 'none'
}

function copy() {
    navigator.clipboard.writeText(textContainer.textContent)
        .then(() => alert("texto copiado!!"))
        .catch(() => alert("ocurrio un error!!"))
}

