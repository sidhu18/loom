import * as React from 'react';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { Auth0Provider } from 'react-native-auth0';
import Constants from './constants/Constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Auth0Provider domain={Constants.OAUTH_DOMAIN} clientId={Constants.OAUTH_CLIENT_ID}>
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    </Auth0Provider>
  );
}
