//imputs

let texto = document.querySelector("#texto")
let data = document.querySelector("#data")
let cor = document.querySelector("#color")

//butões
let btnenviar = document.querySelector("#enviar")
let btnlimpar = document.querySelector("#limpar")
let eareatext = document.querySelector(".resultado")
//
let add = document.querySelector("#add")

let btnmenu = document.querySelector("#secandnaveg")
let sirbtn = document.querySelector("#sair")

let mudartema = document.querySelector("#mudartema")
let menu=document.querySelector(".manun")


let  mainnagation= document.querySelector(".mainnagation")
let main=document.querySelector("#main")
let contador = 1

function adicionarlinta() {
  
  let div = document.createElement("div");
  div.className = "container_tarefa";
  eareatext.appendChild(div);
  let btn = document.createElement("button")
  btn.textContent = "✔️"
  btn.className = "btnconcluir"
  div.appendChild(btn)
  
  let para = document.createElement("p")
  para.className = "paragravo"
  div.appendChild(para)
  
  
  
  //pega os valores dos inputs
  let text = String(texto.value);
  let color = cor.value
  let date = String(data.value)
  
  //verifica se o input texto está vazio
  if (text === "") {
    texto.focus();
    texto.classList.add("inpuntvazio")
    alert("porfavor digite um texto");
  } else {
    para.innerHTML += `${text}:  ${date}`
    para.style.border = `1px solid ${color}`
    add.textContent = contador++
  }
  
  
  //quando clicado no botão enviar os input voltam nos seu valores normais ou vazio
  btn.addEventListener("click", function() {
    para.classList.toggle("concluido")
    if (para.classList.contains("concluido") === true) {
      btn.textContent = "❎"
    } else {
      btn.textContent = "✔️️"
    }
  })
  texto.value = ""
  cor.value = ""
  data.value = ""
}

//um contador
let contadori = 0

function eliminar() {
  
  let removidos = document.querySelector("#removidos")
  let paragrafo = eareatext.firstElementChild
  console.log(paragrafo)
  
  //verifica se ejiste lista na area do resultado ,sé não ele da um alerta ,se sim ele elimina aprimeira e a variavel contadori almenta +1 mostrando assim quantos foram eliminados
  
  if (paragrafo === null) {
    alert("você precisas adicionar pelo menos uma tarefa pa usar essa função")
    
    
  } else {
    
    contadori++
    removidos.textContent = contadori
    paragrafo.remove()
    
  }
}


//variaveis que pega um id de divs com o display none para criar um popup ou uma outra janela 
let popap = document.querySelector(".pop")
let form = document.querySelector(".form")
let adicionar = document.querySelector("#adicionar")

//adiciona eventos aus botão enviar e limpar
btnenviar.addEventListener("click", adicionarlinta)
btnlimpar.addEventListener("click", eliminar)

btnmenu.addEventListener("click", function() {
  menu.classList.add("mostrarmenu")
})

sirbtn.addEventListener("click", () => {
  menu.classList.remove("mostrarmenu")
})

mudartema.addEventListener("click",function() {
  mainnagation.classList.toggle("menuback")
  main.classList.toggle("menuback")
})

//adiciona um evento au botão adicionar
adicionar.addEventListener("click", () => {
  popap.classList.toggle("adicionar")
  form.classList.toggle("adicionar")
  adicionar.classList.toggle("btnadicionar")
  if (adicionar.classList.contains("btnadicionar") === true) {
    adicionar.textContent = "❎"
  } else {
    adicionar.textContent = "adicionar tarefas➕"
  }
})