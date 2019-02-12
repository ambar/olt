# olt

A dead simple, one-line template function.

[![build status](https://badgen.net/travis/ambar/olt)](https://travis-ci.org/ambar/olt)
[![npm version](https://badgen.net/npm/v/olt)](https://www.npmjs.com/package/olt)
[![minzipped size](https://badgen.net/bundlephobia/minzip/olt)](https://bundlephobia.com/result?p=olt)
![module](https://badgen.net/badge/module/esm,cjs?list=1)

## Install

```bash
npm install olt
```

## Usage

```js
import olt from 'olt'

olt('name: ${name}, calc: ${1 + 1}, nested: ${`${0}`}')({
  name: 'JoJo',
})
// => 'name: JoJo, calc: 2, nested: 0'
```
