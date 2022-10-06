Project written on node.js + express + mongodb + mongoose

Before start please create `.env` file, see `.env.example`

To run project in production mode you can use

```sh
    npm install && npm start
```

To run project tests you can use

```sh
    npm run test
```

don't forget to install pm2 globally

To run project in development mode you can use

```sh
    npm install && npm run dev
```

With this app you can find pokemons by calling GET request /api/pokemons
Pokemons sorted by pokedexNumber by asc.
Valid queries are:

- limit - the limit of results
- page - the pagination page
- search - the keyword to search for

- maxAtk - max ATK for searched pokemons
- minAtk - min ATK for searched pokemons
- minTotal - min TOTAL for searched pokemons
- maxTotal - max TOTAL for searched pokemons
- minDef - min DEF for searched pokemons
- maxDef - max DEF for searched pokemons
- minSta - min STA for searched pokemons
- maxSta - max STA for searched pokemons
