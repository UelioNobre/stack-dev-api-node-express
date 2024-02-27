# stack-dev-api-node-express

API simples Nodejs e Dockerfile

## Instalação

```
git clone git@github.com:UelioNobre/stack-dev-api-node-express.git
docker-compose up -d
```

## Banco de Dados

### Sequelize

#### Migrations

```bash
# Cria um model e uma migration
$ npx sequelize-cli model:generate --name posts --attributes title:string,text:string

# Executa migrations
$ npx sequelize-cli db:migrate

# Desfazendo migrations
$ npx sequelize-cli db:migrate:undo
$ npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```

#### Seeders
```bash
npx sequelize-cli seed:generate --name posts
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
npx sequelize-cli db:seed:undo:all
```