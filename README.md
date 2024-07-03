![image](https://github.com/JCarvalhoQA/ArcelorMittal-Cypress-e2e/assets/173073444/dc074d06-770f-4058-9772-635a103abc9c)



# Cypress E2E Testing

Este é um projeto de testes end-to-end (E2E) usando Cypress para automatizar testes em uma aplicação web. O Cypress é uma ferramenta poderosa para escrever testes automatizados de forma rápida e eficiente.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
  - [Executar todos os testes](#executar-todos-os-testes)
  - [Executar testes em um navegador específico](#executar-testes-em-um-navegador-específico)
  - [Abrir a interface gráfica do Cypress](#abrir-a-interface-gráfica-do-cypress)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

### Clonar o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### Instalar dependências

```bash
npm install
```

## Uso

### Executar todos os testes

```bash
npm run test
```

### Executar testes em um navegador específico (por exemplo, Chrome)

```bash
npm run test:chrome
```

### Abrir a interface gráfica do Cypress

```bash
npm run cypress:open
```

Na interface gráfica, você pode selecionar os testes para executar e observar sua execução.

## Estrutura do Projeto

```plaintext
nome-do-repositorio/
├── cypress/
│   ├── fixtures/                
│   ├── integration/             
│   ├── plugins/                 
│   ├── support/                 
├── node_modules/               
├── .gitignore                   
├── cypress.json                 
├── package.json                 
├── README.md                    
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Para contribuir:

1. Crie uma branch com sua feature:
    ```bash
    git checkout -b feature/nova-feature
    ```
2. Commit suas mudanças:
    ```bash
    git commit -am 'Adiciona nova feature'
    ```
3. Push para a branch:
    ```bash
    git push origin feature/nova-feature
    ```
4. Crie um novo Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.
