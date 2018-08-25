import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View , 
  ActivityIndicator , 
  TouchableOpacity
} from 'react-native';
import { MeetupApi } from "../constants/api";
import axios from "axios";

const meetupApi = new MeetupApi();
export default class App extends React.Component {
  static defaultProps = {
    meetupApi
  }


  state = {
    loading: false,
    meetups:[]
  }


  async componentDidMount() {
    this.setState({loading: true});
    const meetups = await this.props.meetupApi.fetchMeetups();
    setTimeout(() => this.setState({loading: false, meetups:meetups}), 2000);
  };


  render() {
    if(this.state.loading){
      return(
        <View style={ styles.container }>
          <ActivityIndicator size="large" color="blue"/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.js...aaaaa</Text>
        {this.state.meetups.map((meetup,i)=>(
          <Text key={i}>{meetup.title}</Text>
        ))} 
        <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate("CreateScreen")} 
          style={styles.Newcreate}
          >
          <Text>
            click me
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Newcreate:{
    height:50,
    width:340,
    backgroundColor:"blue"
  }
});
