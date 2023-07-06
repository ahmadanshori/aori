// import React from 'react';
// import {createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
// import {persistStore, persistReducer} from 'redux-persist';
// // import createSagaMiddleware from 'redux-saga';
// // import AsyncStorage from '@react-native-community/async-storage';

// // import rootSaga from '@/saga';
// import reducers from '@/reducers';

// const persistConfig = {
//   key: 'root',
//   //   storage: AsyncStorage,
//   blacklist: [],
//   transforms: [],
//   //   whitelist: ['token', 'account'],
// };
// // const appReducer = reducers;

// // const rootReducer = (state, action) => {
// //   return appReducer(state, action);
// // };
// // const persistedReducer = persistReducer(persistConfig, reducers);

// // const sagaMiddleware = createSagaMiddleware();

// let middleware = [];

// if (process.env.NODE_ENV === 'development') {
//   middleware.push(logger);
// }

// let store = createStore(reducers, applyMiddleware(...middleware));
// // let persistor = persistStore(store);

// // sagaMiddleware.run(rootSaga);

// export default store;
// // export {persistor};
