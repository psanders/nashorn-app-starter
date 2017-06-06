# A skeleton to quickly start with Oracle Nashorn

This starter uses BabelJS to bring modern Javascript to the JVM. Use Gradle to manage your java dependencies
and NPM to install your node packages.

## Depends on

- JDK8
- NPM
- Gradle (Recommended)

## Todo

- [x] es5 to es6 transpilation with babeljs
- [x] npm support via jvm-npm
- [ ] fully support junit testing

## Get Starter

**Clone and prep**

```bash
git clone https://github.com/psanders/nashorn-app-starter
cd nashorn-app-starter
npm i                   # Install npm stuff
mv node_modules .libs   # Fugly, right? I could not yet find a better way to do this
```

Optionally you could run `npm run shadowJar` to add new dependencies to the `.libs\bundle.deps.jar`

**Transpile, test, and run**

```bash
npm run build           # Transpile the code to ES5
npm test                # Run the unit test
npm start
```

> NPM support can only work out of the box for pure JS NPM modules. Please see [jvm-npm](https://github.com/nodyn/jvm-npm)
