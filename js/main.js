'use strict'

import { getContatos, getContatosPorNome, postContato } from "./contato.js"


function criarCard (contato) {
    const container = document.getElementById('container')

    const card = document.createElement('div')
    card.classList.add('card-contato')
    
    card.innerHTML = `
        <img src="${contato.foto}" alt="avatar">
        <h2>${contato.nome}</h2>
        <p>${contato.celular}</p>
    `
    container.appendChild(card)
}

async function exibirContatos () {
    const contatos = await getContatos()
    contatos.forEach (criarCard)
}

async function exibirPesquisa (evento) {
    const container = document.getElementById('container')
    
    if(evento.key == 'Enter'){
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach (criarCard)
    }
}

function novoContato () {
    document.querySelector('main').className = 'form-show'
}

function voltarHome (){
    document.querySelector('main').className = 'card-show'
}

function salvarContato (){
    const contato = {
        
            "id": 1,
            "nome": document.getElementById('nome').value,
            "celular": document.getElementById('celular').value,
            "foto": document.getElementById('foto').value,
            "email": document.getElementById('email').value,
            "endereco":document.getElementById('endereco').value,
            "cidade":document.getElementById('cidade').value
        
    }
    if(postContato(contato)) {
            alert ('Contato cadastrado com sucesso!!!')
            await exibirContatos(voltarHome)
        }
    
    console.log (contato)
}
exibirContatos()

document.getElementById('nome-contato')
    .addEventListener('keydown', exibirPesquisa)

document.getElementById('novo-contato')
    .addEventListener('click', novoContato)

document.getElementById('cancelar')
    .addEventListener('click', voltarHome)

document.getElementById('salvar')
    .addEventListener('click', voltarHome)