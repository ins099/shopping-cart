import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import Home from './src/container/home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
