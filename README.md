## 🚀 Projeto Node com NPM

- Instale as dependências: express, ejs, body-parser e multer
- Abra o projeto com o VSCode.
- Crie um routing para /, que redirecione a chamada para uma view ejs index.ejs.
- Esta view deve conter uma página HTML simples de boas-vindas
- Crie uma segunda página com uma tela de login. Ao clicar no botão Enviar, os dados devem ser enviados para o servidor. Se o usuário e senha estiverem cadastradas (use array de objetos para armazenar usuário e senha), o sistema deve redirecionar para uma página de Login efetuado com Sucesso, caso contrário o sistema deve redirecionar para uma página de Login Falhou.

### ✨ Observações:
- Utilize o Node.js para desenvolver o servidor.
- Utilize o Express.js para gerenciar as rotas.
- Use o EJS como motor de visualização para as páginas HTML.
- Implemente o middleware body-parser para análise dos dados do formulário.
- Utilize o multer para lidar com o upload de arquivos, caso necessário.
- Você pode armazenar os dados dos usuários em um array de objetos, mas para um sistema real, considere usar um banco de dados.
