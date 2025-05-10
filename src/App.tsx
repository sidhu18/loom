import * as React from 'react';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import { store } from './state/store';

export default function App() {
  return (
  <Provider store={store}>
    <Navigation />
  </Provider>
  );
}
