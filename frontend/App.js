import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { createStackNavigator } from "react-navigation"

import HomeScreen from "./screens/HomeScreen"
import CreateScreen from "./screens/CreateScreen"


export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <AppStackNavigator/>
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator ({
  HomeScreen:HomeScreen,
  CreateScreen:CreateScreen
},{
  mode:'modal'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
