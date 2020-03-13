import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const color = {
  body: '#41CCC9',
  highlight: '#4D98CF',
  shadow: '#5A5386',
  button: '#524364',
  white: '#FFFFFF',
  black: '#000000',
  wrong: '#900',
  right: '#090',
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
  screenWidth: Math.round(Dimensions.get('screen').width),
  screenHeight: Math.round(Dimensions.get('screen').height),
  statusbarHeight: StatusBar.currentHeight,
  forgotIcon: 'phonelink-lock',
  logoImage_Http_URL: {
    uri:
      'https://cdn.clipart.email/7dd95b6e86cfb39037fa78c2f06a92fd_guidelines-to-use-survey-maps_1571-1600.png',
  },
  totalAttempts: 5,
};

export default class EpinLoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      attempts: grid.totalAttempts,
      attemptMessage: '',
      attemptMessage_Color: color.white,
    };
  }

  pinInput = React.createRef();

  _checkCode = pin => {
    // console.log(`PIN is ${pin}`);
    if (pin !== '1234') {
      this.pinInput.current.shake().then(() => this.setState({code: ''}));
      if (this.state.attempts > 1) {
        let {attempts} = this.state;
        attempts = attempts - 1;
        this.setState({
          attempts,
          attemptMessage: `You have ${attempts} more ${
            attempts !== 1 ? 'tries' : 'chance'
          }!`,
          attemptMessage_Color: color.wrong,
        });
      } else {
        this.setState({
          attempts: grid.totalAttempts,
          attemptMessage: 'WRONG AGAIN ! You are LOCKED',
          attemptMessage_Color: color.wrong,
        });
      }
    } else {
      this.setState({
        code: '',
        attempts: grid.totalAttempts,
        attemptMessage: 'SUCCESS! You are LoggedIn',
        attemptMessage_Color: color.right,
      });
    }
  };

  handleTextChange = code => {
    this.setState({code});
    // console.log(code);
  };

  render() {
    const {code, attemptMessage, attemptMessage_Color} = this.state;

    return (
      <View style={styles.viewport}>
        <StatusBar backgroundColor={color.shadow} barStyle="light-content" />
        <View style={styles.container}>
          {/* LOGO AREA for Logo view */}
          <View style={styles.logoview}>
            <View>
              <Image source={grid.logoImage_Http_URL} style={styles.logo} />
            </View>
          </View>
          {/* CENTER AREA for PIN view */}
          <View style={styles.pinview}>
            <View style={styles.pinviewContent}>
              <Text style={styles.pintitle}>Enter your ePIN</Text>
              <SmoothPinCodeInput
                ref={this.pinInput}
                placeholder={<View style={styles.pinInputPlaceholder} />}
                mask={<View style={styles.pinInputMask} />}
                maskDelay={10}
                codeLength={4}
                password={true}
                cellStyle={null}
                cellStyleFocused={null}
                value={code}
                onTextChange={this.handleTextChange}
                onFulfill={this._checkCode}
                restrictToNumbers={true}
              />
            </View>
          </View>
          {/* FOOTER AREA for Footer view */}
          <View style={styles.footerview}>
            <View style={styles.footerSectionTop}>
              <Text
                style={[styles.attempttitle, {color: attemptMessage_Color}]}>
                {attemptMessage}
              </Text>
            </View>
            <View style={styles.footerSectionBottom}>
              <TouchableOpacity
                style={styles.footerSubSection}
                onPress={() => console.warn('Forgot ePIN Screen')}>
                <Icon
                  name={grid.forgotIcon}
                  size={grid.unit * 2.25}
                  color={color.shadow}
                />
                <Text style={styles.footer_ForgotText}>Forgot your ePIN?</Text>
              </TouchableOpacity>
            </View>
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
  },
  logoview: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '42%',
  },
  pinview: {
    justifyContent: 'center',
    height: '16%',
  },
  footerview: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '42%',
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
  pinviewContent: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  footerSectionTop: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
  },
  footerSectionBottom: {
    height: '50%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  footerSubSection: {
    alignItems: 'center',
    marginBottom: '5%',
  },
  footer_ForgotText: {
    fontSize: grid.unit * 1.25,
    textAlignVertical: 'center',
    color: color.shadow,
  },
  pintitle: {
    color: color.shadow,
    fontSize: grid.unit * 1.5,
    marginBottom: 8,
  },
  attempttitle: {
    color: color.wrong,
    fontSize: grid.unit * 1.5,
    marginBottom: 8,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
  pinInputPlaceholder: {
    width: 45,
    height: 45,
    borderRadius: 10,
    opacity: 0.3,
    backgroundColor: color.highlight,
    borderColor: color.shadow,
    borderWidth: 2,
  },
  pinInputMask: {
    width: 45,
    height: 45,
    borderRadius: 5,
    backgroundColor: color.highlight,
  },
});
