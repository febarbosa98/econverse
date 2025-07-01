# Teste Front-End Econverse

Este projeto foi desenvolvido como parte do **teste técnico da Econverse**.

## Sobre o desenvolvimento

O projeto foi criado utilizando **React** com Vite, visando performance e facilidade de manutenção. Toda a interface foi componentizada, separando cada parte em arquivos próprios (banner, carrossel de produtos, modal, footer, etc).  
O layout foi implementado com **SCSS modular**, utilizando variáveis para cores e espaçamentos, garantindo consistência visual e facilidade de ajustes.

O carrossel de produtos foi desenvolvido sem bibliotecas externas, apenas com lógica em React e CSS, permitindo navegação infinita entre os produtos. O modal exibe detalhes do produto selecionado e bloqueia o scroll da página ao ser aberto, melhorando a experiência do usuário.  
Durante o desenvolvimento, foram seguidas boas práticas de código limpo, componentização e responsividade, buscando fidelidade ao layout proposto no teste.

## Acesse o projeto online

[Visite o projeto aqui](https://econverse-black.vercel.app/)


## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd econverse
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## Como rodar o projeto

Execute o comando abaixo para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173) (ou porta configurada pelo Vite).

