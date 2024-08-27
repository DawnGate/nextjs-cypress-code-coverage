# Description

Have you get some problem when config with nextjs (14) + cypress + istanbul(code coverage) ?

babel + istanbul will instrument your code => but only "client side" code

With "server side" code ? => you need config the api/coverage for cypress know your instrument code

# Install

```
npm i
```

# Using

For run test + code coverage

```
npm run dev:babel
npm run cy:open (OR) npm run cy:run
```

- Note: I write more commands in package.json, I don't want override swc in dev mode. So we will have **dev:babel** and **dev** commands
