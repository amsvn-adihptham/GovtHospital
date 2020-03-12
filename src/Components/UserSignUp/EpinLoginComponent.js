import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  StatusBar,
} from 'react-native';

const color = {
  body: '#41CCC9',
  highlight: '#41CCC9',
  shadow: '#5A5386',
  button: '#524364',
  white: '#FFFFFF',
  black: '#000000',
};

const grid = {
  unit: 16,
  headline: 32,
  title: 24,
  subheader: 18,
  body: 14,
  caption: 12,
  label: 10,
  lineHeight: 1.5,
  navIcon: 20,
  border: 2,
  borderRadius: 2,
  lowOpacity: 0.4,
  mediumOpacity: 0.6,
  highOpacity: 0.8,
  // screenWidth: Math.round(Dimensions.get('window').width),
  screenWidth: Math.round(Dimensions.get('screen').width),
  // screenHeight: Math.round(Dimensions.get('window').height),
  screenHeight: Math.round(Dimensions.get('screen').height),
  statusbarHeight: StatusBar.currentHeight,
};

export default class EpinLoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.viewport}>
        <StatusBar backgroundColor={color.shadow} barStyle="light-content" />
        <View style={styles.container}>
          {/* LOGO AREA for Logo view */}
          <View style={styles.logoview}>
            <Text style={styles.logoviewtext}>
              {grid.screenHeight} x {grid.screenWidth} *LOGO*
            </Text>
          </View>
          {/* CENTER AREA for PIN view */}
          <View style={styles.pinview}>
            <TextInput placeholder="PIN" style={styles.pinviewtext} />
          </View>
          {/* FOOTER AREA for Footer view */}
          <View style={styles.footerview}>
            <TextInput placeholder="Footer" style={styles.footerviewtext} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewport: {
    backgroundColor: color.body,
    height: grid.screenHeight - grid.statusbarHeight,
    width: grid.screenWidth,
  },
  container: {
    flex: 1,
    borderColor: '#333',
    borderWidth: 5,
  },
  logoview: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '45%',
    borderWidth: 5,
  },
  pinview: {
    justifyContent: 'center',
    height: '10%',
  },
  footerview: {
    justifyContent: 'flex-end',
    height: '45%',
    borderWidth: 5,
  },
  logoviewtext: {
    height: 50,
    fontSize: 24,
    borderColor: '#999',
    borderWidth: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'flex-end',
  },
  pinviewtext: {
    height: 50,
    fontSize: 24,
    borderColor: '#999',
    borderWidth: 5,
    textAlign: 'center',
  },
  footerviewtext: {
    height: 50,
    fontSize: 24,
    borderColor: '#999',
    borderWidth: 5,
    textAlign: 'center',
  },
});
