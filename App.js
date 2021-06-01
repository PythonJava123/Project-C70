import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './Screens/WriteStoryScreen';
import WriteStoryScreen from './Screens/ReadStoryScreen';

export default class App extends React.Component{
render(){
  return(
    <AppContainer/>
  )
}
}

const tabNavigator = createBottomTabNavigator({
  WriteStoryScreen : {screen: WriteStoryScreen},
  ReadStoryScreen : {screen: ReadStoryScreen}
},
{
defaultNavigationOptions: ({navigation}) => ({
  tabBarIcon: ({}) => { const routeName = navigation.state.routeName
if(routeName === 'WriteStoryScreen'){
  return(
    <Image source={require('./assets/WriteStory.png')} style={{width:35, height:35}}></Image>
  )}
  else if (routeName === 'ReadStoryScreen'){
    return(
      <Image source={require('./assets/download (1).jpeg')} style={{width:35, height:35}}></Image>
    )
  }
  }
})
}
)


const AppContainer = createAppContainer(tabNavigator);