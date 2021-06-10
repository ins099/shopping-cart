import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import Home from './src/container/home';
import SagaPrac from './src/container/SagaPractice/sagaprac';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Home /> */}
      <SagaPrac />
    </Provider>
  );
};

export default App;
