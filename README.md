# redux-immutable-utils
Utilities for using Immutable with Redux

### `combineReducers(reducers)`
Makes no assumptions about your reducers and combines them into an Immutable Map.

```js
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
```
