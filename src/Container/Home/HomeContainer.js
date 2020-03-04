import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeComponent from '../../Components/Home/HomeComponent';
export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  openDashboard = () => {
        this.props.navigation.dispatch(DrawerActions.openDrawer())
    }

  render() {
    return (
      <View>
      <TouchableOpacity onPress={this.openDashboard}>
              <Icon name="bars" color="black" size={20} />
            </TouchableOpacity>
        <Text> HomeContainer </Text>
      </View>
    );
  }
}
