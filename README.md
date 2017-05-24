# A skeleton to quickly start with Oracle Nashorn

This starter uses BabelJS to bring modern Javascript to the JVM. Use Gradle to manage your java dependencies
and NPM to install your node packages.

## Depends on:

- JDK8
- NPM
- Gradle (Recommended)

## Features

- ES6 to ES5 via BabelJS
- NPM support via JVM-NPM
- JUnit Test Helper

## Get Starter

```bash
git clone https://github.com/psanders/nashorn-app-starter
npm i                   # Install npm stuff
mv node_modules .libs   # I know I could not yet find a better way to do this
npm run build           # Transpile the code to ES5
npm test                # Run the unit test
npm start               # This will only work in unix-like systems.
```

> The comand 'npm start' will only work in unix-like systems. I'm working in fixing this.
> NPM support can only work out of the box for pure JS NPM modules. Please see [jvm-npm](https://github.com/nodyn/jvm-npm)