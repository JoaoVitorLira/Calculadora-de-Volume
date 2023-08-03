

let caixa = document.getElementById('caixa')
caixa.addEventListener('click', clicar)

function Volume(){
    let a = Number (prompt("Qual o valor de h?"))
    let b = Number  (prompt("Qual o valor de l?"))
    let c = Number (prompt("Qual o valor de c?"))
    let res = a*b*c
    alert(`O resultado do volume é ${res}`)
    let texto = document.querySelector('#espaço')
    texto.innerHTML = `O volume do paralelepipedo é ${res}`
}

function Volume2(){
    let d = Number (prompt("Qual o valor da área da base?"))
    let e = Number (prompt("Qual o valor de h?"))
    let res = d*e
    alert(`O resultado do volume é ${res}`)
    let texto2 = document.querySelector('#espaço2')
    texto2.innerHTML = `O volume do cilindro é ${res}`
}


function Volume3(){
    let f = Number(prompt("Qual o valor de área da base?"))
    let g = Number (prompt("Qual o valor de h?"))
    let res = (f*g)/3
    alert(`O resultado do volume é ${res}`)
    let texto = document.querySelector('#espaço3')
    texto.innerHTML = `O volume do cone é ${res}`
}

function Volume4(){
    let h = Number(prompt("Qual o valor do raio?"))
    let res = (4*3,14(h*h*h))/3
    alert(`O resultado do volume é ${res}`)
    let texto = document.querySelector('#espaço4')
    texto.innerHTML = `O volume do esfera é ${res}`
}

function Volume5(){
    let i = Number(prompt("Qual o valor da aresta?"))
    let res = i*i*i
    alert(`O resultado do volume é ${res}`)
    let texto = document.querySelector('#espaço5')
    texto.innerHTML = `O volume do cubo é ${res}`

}