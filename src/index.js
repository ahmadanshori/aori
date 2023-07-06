import React, {createContext} from 'react';
import {Provider} from 'react-redux';

import AppNavigator from './config/routes';
import {store} from './store/store';

export const AppContext = createContext();

export default () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
