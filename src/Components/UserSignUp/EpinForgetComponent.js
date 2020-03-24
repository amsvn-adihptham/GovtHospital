import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';
import {grid, color} from '../../Constants';

export default class EpinForgetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.viewport}>
        <View style={styles.container}>
          <View
            style={{
              marginTop: 30,
              width: '40%',
            }}>
            <Button
              title="Cancel"
              color="coral"
              onPress={this.props.navigatetoEpinLogin}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewport: {
    backgroundColor: 'coral',
    // height: grid.screenHeight - grid.statusbarHeight,
    height: '50%',
    // width: grid.screenWidth,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
