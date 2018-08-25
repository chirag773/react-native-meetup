import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FormLabel, FormInput, button, Button } from "react-native-elements"

import { MeetupApi } from "../constants/api";

const meetupApi = new MeetupApi();



class CreateScreen extends Component {
  static navigationOptions = {
    title:"create"
  }

  state={
    title:"",
    description:""
  }

  changeTitle = title => this.setState({title})

  changeDescription = description => this.setState({description})

  createMeetup = async () => {
    const { title, description } = this.state;
    const response = await meetupApi.createMeetups({
      title,
      description
    })
  }

  render() {
    console.log(this.state);
    return (
      <View>
      <View>
        <FormLabel>Title</FormLabel>
        <FormInput
          onChangeText={this.changeTitle}
          value={this.state.title}
        />
      </View>
      <View>
        <FormLabel>Description</FormLabel>
        <FormInput

          onChangeText={this.changeDescription}
          value={this.state.description} 
        
          multiline/>
      </View>
      <View>
        <Button
          title="Submit"
          disable={invalid || submiting}
          onPress={handelSubmit(this.createMeetup)}
        />
      </View>
      </View>
    );
  }
}

export default CreateScreen;
