# Orphanages (Next Level Week) - Backend
## Projeto do NLW (Kayo Costa)

O orphanages é um projeto criado através do Evento Next Level Week, responsável por cadastrar orfanatos em diversas localidades.

[Projeto Online](https://nlw-kayo-happy.herokuapp.com/) - Às vezes o primeiro carregamento demora um pouco (hospedagem gratuita) 

## Funcionalidades

- Criação de Orfanato
- Listagem de Orfanatos
- Marcação de Orfanatos no Mapa
- Cadastro de images por orfanato

## Principais Tecnologias Utilizadas
- Node.js
- Typescript
- SQLite
- Typeorm


## Instalação

O projeto requer o [Node.js](https://nodejs.org/) / [Yarn](https://www.npmjs.com/package/yarn).

Instalação de dependências.
Após clonar o repositório, execute o comando para a instalação das dependências do projeto: 
```sh
yarn install
```

Para iniciar o servidor, utilize: 
```sh
yarn dev
```


Para uma versão limpa do banco de dados você pode deletar o arquivo database.sqlite (dentro do diretório src/database) e executar o comando: 
```sh
yarn typeorm migration:run
```
