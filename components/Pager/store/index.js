import reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';

const logger = store => next => action => {
  console.log('dispatching action');
  console.log(action)
  let result = next(action);
  console.log('next state ');
  console.log(store.getState());
  return result;
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default createStoreWithMiddleware(reducers);
