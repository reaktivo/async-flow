# [async-flow](https://github.com/reaktivo/async-flow/)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/reaktivo/async-flow/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@reaktivo/async-flow.svg?style=flat)](https://www.npmjs.com/package/@reaktivo/async-flow)
[![CircleCI Status](https://circleci.com/gh/reaktivo/async-flow.svg?style=shield)](https://circleci.com/gh/reaktivo/async-flow)
[![Coverage](https://img.shields.io/codecov/c/github/reaktivo/async-flow.svg)](https://codecov.io/gh/reaktivo/async-flow)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/reaktivo/async-flow/compare)

async-flow is a tiny javascript function piping utility

## Installation

```sh
npm install -g @reaktivo/async-flow
```

## Usage

```js
import asyncFlow from "@reaktivo/async-flow";

const api = asyncFlow(fetch, res => res.json(), json => json.data);

// Which is equivalent to the following
const api = function(...args) {
  return fetch(...args)
    .then(res => res.json())
    .then(json => json.data);
};

//Or
const api = async function(...args) {
  const response = await fetch(...args);
  const json = await response.json();
  return json.data;
};
```

## License

async-flow is open source software [licensed as MIT](https://github.com/reaktivo/async-flow/blob/master/LICENSE).
