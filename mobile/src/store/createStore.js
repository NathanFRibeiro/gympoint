import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  // eslint-disable-next-line no-undef
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
