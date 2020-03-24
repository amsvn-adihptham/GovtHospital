import React, {Component} from 'react';
import {View, Text} from 'react-native';
import EpinForgetComponent from '../../Components/UserSignUp/EpinForgetComponent';

export default class EpinForgetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigatetoEpinLoginComponent = () => {
    this.props.navigation.navigate('EpinLoginContainer');
  };

  render() {
    return (
      <View>
        <EpinForgetComponent
          navigatetoEpinLogin={this.navigatetoEpinLoginComponent}
        />
      </View>
    );
  }
}
