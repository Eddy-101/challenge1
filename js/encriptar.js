let text = document.getElementById('text')
let buttonEncrypt = document.getElementById('b-encrypt')
let buttonDesEncrypt = document.getElementById('b-desencrypt')

buttonEncrypt.addEventListener('click', encriptar)

function encriptar() {
    console.log(text.value)
}


