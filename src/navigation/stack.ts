import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home';
import SettingsScreen from '../screens/Settings/Settings';
import { Routes } from './routes';
  
  const RootStack = createNativeStackNavigator({
    initialRouteName: Routes.Home,
    screens: {
      [Routes.Home]: {
        screen: HomeScreen,
        options: {
            title: 'Loom'
        }
      },
      [Routes.Settings]: SettingsScreen
    },
  });
  
export const Navigation = createStaticNavigation(RootStack);
  