import { Map } from 'immutable';

export default (reducers) => {
  const finalReducers = Object.keys(reducers).reduce((result, key) => {
    const val = reducers[key];
    return (typeof val === 'function') ? result.set(key, val) : result;
  }, Map());
  return (state, action) => {
    return finalReducers.reduce((result, reducer, key) => {
      return result.set(key, reducer(Map.isMap(state) ? state.get(key) : state, action));
    }, Map());
  }
}
