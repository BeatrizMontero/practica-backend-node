# practica-backend-node

# WEB-API-Node.js-MongoDB
Fundamentos de programación en Backend con Node.js y MongoDB

## Como arrancamos la base de datos en Linux y en Mac

./bin/mongod --dbpath ./data


# Nodepop

Deploy:

```sh
npm install
```

Load initial data to database:

```
npm run init-db
```

Start the application in production with:

```sh
npm start
```

Start the application in development with:

```sh
npm run dev
```

## API Documentation


## Anuncios list:


GET /api/anuncios


{"resultados":[
    {"_id":"63b92f1a88572177ad2857f3",
    "nombre":"Bicicleta",
    "venta":true,
    "precio":230.15,
    "foto":"bici.jpg",
    "tags":[ "lifestyle","motor"]}
]}


### Filters:

Tags:

```sh
http://localhost:3000/api/anuncios?tags=motor
```

Advertisement(sale/to buy):

```sh
http://localhost:3000/api/anuncios?venta=false
```

Price:

```sh
http://localhost:3000/api/anuncios?precio=50.00
```

Name(start whith):

```sh
http://localhost:3000/api/anuncios?nombre=v
```

List of tags:

```sh
http://localhost:3000/api/anuncios?fields=tags -_id
```

http://localhost:3000/api/anuncios?tags=lifestyle&venta=false&nombre=Vinilo&precio=25.00&skip=0&limit=2&sort=precio
