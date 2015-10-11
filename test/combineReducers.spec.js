import expect from 'expect.js';
import { List, Map } from 'immutable';
import combineReducers from '../src/combineReducers';

describe('combineReducers()', () => {
  it('should combine the reducers', () => {
    const reducer = combineReducers({
      counter: (state = 0, action = {}) =>
        action.type === 'increment' ? state + 1 : state,
      stack: (state = List(), action = {}) =>
        action.type === 'push' ? state.push(action.payload) : state
    });

    const state1 = reducer(undefined, { type: 'increment' });
    expect(Map.isMap(state1)).to.be(true);
    expect(state1.get('counter')).to.be(1);
    expect(state1.get('stack')).to.be.a(List);
    expect(state1.get('stack').size).to.be(0);
    const state2 = reducer(state1, { type: 'push', payload: 'a' });
    expect(Map.isMap(state2)).to.be(true);
    expect(state2.get('counter')).to.be(1);
    expect(state2.get('stack')).to.be.a(List);
    expect(state2.get('stack').size).to.be(1);
    expect(state2.get('stack').includes('a')).to.be(true);
  });
});
