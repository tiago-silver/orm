# Definindo a imagem
FROM node:18-alpine3.20
# Criando a pasta de trabalho
WORKDIR /usr/src/app
# Copiar o conteúdo do projeto para a raiz do projeto
COPY . .
# Gerando a pasta node_modules
RUN npm install

# Expões a porta
EXPOSE 3333
#Comando para executar a aplicaçao
CMD ["npm", "start"]