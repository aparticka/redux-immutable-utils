# redux-immutable-utils

[![build status](https://img.shields.io/travis/aparticka/redux-immutable-utils/master.svg?style=flat-square)](https://travis-ci.org/aparticka/redux-immutable-utils)

Utilities for using Immutable with Redux

### `combineReducers(reducers)`
Makes no assumptions about your reducers and combines them into an Immutable Map.

```js
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
```
