import * as React from 'react';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { Auth0Provider } from 'react-native-auth0';
import Constants from './constants/Constants';

export default function App() {
  return (
    <Auth0Provider domain={Constants.OAUTH_DOMAIN} clientId={Constants.OAUTH_CLIENT_ID}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </Auth0Provider>
  );
}
