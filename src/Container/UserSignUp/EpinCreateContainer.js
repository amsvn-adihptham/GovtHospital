import React, {Component} from 'react';
import {View, Text} from 'react-native';
import EpinCreateComponent from '../../Components/UserSignUp/EpinCreateComponent';

export default class EpinCreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigatetoEpinCreateComponent = () => {
    this.props.navigation.navigate('LoginContainer');
  };

  navigatetoEpinLoginComponent = () => {
    this.props.navigation.navigate('EpinLoginContainer');
  };

  render() {
    return (
      <View>
        <Text> EpinCreateContainer </Text>
        <EpinCreateComponent
          navigatetoEpinLogin={this.navigatetoEpinLoginComponent}
        />
      </View>
    );
  }
}
