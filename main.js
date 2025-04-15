'use strict'

// Pegar/Ler os contatos
async function getMusica() {

    const url = `http://localhost:8080/v1/controle-musicas/musicaLista`

    const response = await fetch(url)

    const data = await response.json()
    console.log(data)
    return data
}


async function getMusicaFiltro() {

    const url = `http://localhost:8080/v1/controle-musicas/musicaFiltroID/${id}`
    
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(musica) 
    }


    const response = await fetch(url, options)

    const data = await response.json()
    console.log(data)
    return data
}

// Criar novo contato
async function postMusica(musica){
    // Quando a URL está fora, ou a função recebe algo que não é via params ela não é pura
    const url = `http://localhost:8080/v1/controle-musicas/musica`

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(musica) 
    }

    const response = await fetch(url, options)

    //Retorna ok se ocorreu certo e false se deu erro
    return response.ok
}

// Atualizar contato existente buscando pelo ID
async function putMusicas(musica, id){

    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(musica) 
    }

    const response = await fetch(url, options)

    //Retorna ok se ocorreu certo e false se deu erro
    return response.ok
}

// Deletar um contato pelo ID
async function deleteContato(id){
    
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`

    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)

    return response.ok
}

const musicaNova = {
    "nome": "Ana Pires",
    "celular": "11 9 8654-6264",
    "foto": "../img/ana-oliveira-dias.png",
    "email": "arimualdopires@gmail.com",
    "endereco": "Av. Anibal Correia, 193",
    "cidade": "Barueri"
}