# MongoDB

## Executando o MogoDB via Docker

> É necessario ter o docker e docker-compose instalado na maquina

Entre na pasta docker

### Configurar porta mongo

Para configurar a porta que o mongo sera executado edite o arquivo .env informando a porta em MONGODB_PORT

```bash
# Executar container Mongodb
docker-compose up -d
```

# API Mmartan

## Descrição

Esta é uma api em Node.js desenvolvida com Express e TypeScript e com base de dados MongoDB. Com o padrão de pasta DDD.

## Dependências do projeto

```bash
# Acessar pasta da api
cd api

# Instalar dependências
yarn
```

### Config ambiente de produção

Renomeie o arquivo .env.sample para .env e configure as informações de banco de dados e configurações do servidor.

### Config ambiente de desenvolvimento

copie o arquivo .env para .env.testing e configure com as informações de banco de dados e configurações do servidor de teste/desenvolvimento e NODE_ENV=testing.

## Executando a API

### Desenvolvimento

Para iniciar o aplicativo no modo de desenvolvimento, execute:

```bash

# Popular banco de dados com alguns produtos
yarn seeder

# Iniciar servido em modo de desenvolvimento
yarn dev

```

### Produção

Para iniciar o aplicativo no modo de produção, execute:

```bash
# Acessar pasta da api
cd api

# Para compilar os arquivos, sera criado uma pasta dist com os aquivos
yarn build

# Popular banco de dados com alguns produtos
yarn seeder

# Iniciar servido em modo de produção
yarn start
```

# APP Mmartan

## Descrição

Esta é o frontend desenvolvido com Reactjs.

### Config url endpoint api

acesse frontend/src/utils/api.js e altere a const API_ENDPOINT informando a url da api

## Dependências do projeto

```bash
# Acessar pasta da frontend
cd frontend

# Instalar dependências
yarn
```

### Desenvolvimento

Para iniciar o aplicativo no modo de desenvolvimento, execute:

```bash

# Iniciar aplicativo
yarn start

```

### Build

Para compilar os arquivos, execute:

```bash

# compilar
yarn build

```
