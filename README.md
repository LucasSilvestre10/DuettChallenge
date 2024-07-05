# Bem-vindo ao Desafio do Teste Técnico Desenvolvedor React .Net - Remoto da Duett

## Descrição

Este repositório contém o desafio do Teste Técnico Desenvolvedor React .Net - Remoto da empresa Duett. O projeto completo foi desenvolvido com backend utilizando C# .NET 8.0 e frontend com React JS utilizando hooks, Context API e Material-UI.

## Branches

### Master
Na branch `master`, você encontrará a versão do projeto configurada para uso com o banco de dados PostgreSQL e utilizada para a publicação do projeto, mas que infelizmente não consegui concluir o deploy.

### Dev
Na branch `dev`, você encontrará a aplicação para teste local. Para facilitar os testes, o backend utiliza um banco de dados inMemory.

## Instruções para Configuração Local

### Frontend
1. **Clone o repositório e navegue até a pasta `FrontEnd`:**
    ```bash
    git clone https://github.com/LucasSilvestre10/DuettChallenge
    cd DuettChallenge/FrontEnd
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Compile a aplicação:**
    ```bash
    npm build
    ```

4. **Inicie a aplicação:**
    ```bash
    npm start
    ```

### Backend
1. **Navegue até a pasta `BackEnd` no Visual Studio.**
2. **Execute a aplicação utilizando o compilador IIS Express.**

Durante a compilação, o banco de dados será gerado automaticamente inMemory e será populado pelo arquivo `DbInitializer.cs` para casos de teste.

Agora você está pronto para testar a aplicação localmente.

## Contato

Se você tiver alguma dúvida ou encontrar algum problema, por favor, entre em contato comigo.

Obrigado!
