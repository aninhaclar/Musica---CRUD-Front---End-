# Musica---CRUD-Front---End-
🎵 Controle de Músicas - API Front-End
Este projeto contém funções JavaScript que consomem uma API REST para gerenciar um cadastro de músicas. As operações incluem listar, filtrar, criar, atualizar e deletar músicas.

🚀 Tecnologias utilizadas
JavaScript (ES6+)

Fetch API

Node.js (Back-End API em execução local)

📦 Endpoints da API
Base URL: http://localhost:8080/v1/controle-musicas

📚 Funções disponíveis
🔍 getMusica()
Busca e retorna a lista completa de músicas.


const musicas = await getMusica();
🔎 getMusicaFiltro(id)
Filtra e retorna uma música específica com base no ID fornecido.


const musica = await getMusicaFiltro(id);
⚠️ Atenção: A função espera que a variável id esteja definida no escopo global. Considere modificar a função para receber o id como parâmetro.

➕ postMusica(musica)
Adiciona uma nova música ao banco de dados.


const sucesso = await postMusica({
  nome: "Ana Pires",
  celular: "11 9 8654-6264",
  foto: "../img/ana-oliveira-dias.png",
  email: "arimualdopires@gmail.com",
  endereco: "Av. Anibal Correia, 193",
  cidade: "Barueri"
});
🔁 putMusicas(musica, id)
Atualiza os dados de uma música existente, buscando pelo ID.


const sucesso = await putMusicas(musicaAtualizada, id);
❌ deleteContato(id)
Remove uma música do banco de dados com base no ID.


const sucesso = await deleteContato(id);
🧪 Objeto de exemplo
Aqui está um exemplo de objeto que pode ser usado para criar ou atualizar uma música:


const musicaNova = {
  "nome": "Ana Pires",
  "celular": "11 9 8654-6264",
  "foto": "../img/ana-oliveira-dias.png",
  "email": "arimualdopires@gmail.com",
  "endereco": "Av. Anibal Correia, 193",
  "cidade": "Barueri"
};
⚠️ Observações
Certifique-se de que o back-end está rodando em http://localhost:8080.

Algumas funções precisam de melhorias como o uso de parâmetros em vez de depender de variáveis globais.

📄 Licença
Este projeto é apenas para fins educacionais.

Se quiser que eu corrija a função getMusicaFiltro para que receba id como parâmetro, é só avisar!