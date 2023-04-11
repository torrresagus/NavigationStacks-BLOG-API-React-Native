import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UsersScreen from './screens/Users';
import PostsScreen from './screens/Posts';
import DetailsScreen from './screens/Details';
import { StatusBar } from 'react-native';

const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen,
  },
  Posts: {
    screen: PostsScreen,
  },
  Details: {
    screen: DetailsScreen,
  }, 
}, { initialRouteKey: 'Users'

});

export default createAppContainer(AppNavigator)
