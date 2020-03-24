import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native';

import EpinForgetContainer from '../../Container/UserSignUp/EpinForgetContainer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {grid, color} from '../../Constants';

export default class EpinLoginComponent extends Component {
  state = {
    modalVisible: false,
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {code, attemptMessage, attemptMessage_Color} = this.props;

    return (
      <View style={styles.viewport}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          {/* <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View> */}
          <EpinForgetContainer />
        </Modal>
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
                ref={this.props.pinInput}
                placeholder={<View style={styles.pinInputPlaceholder} />}
                mask={<View style={styles.pinInputMask} />}
                maskDelay={10}
                codeLength={4}
                password={true}
                cellStyle={null}
                cellStyleFocused={null}
                value={code}
                onTextChange={this.props.handleTextChange}
                onFulfill={this.props.checkCode}
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
                onPress={() => {
                  this.setModalVisible(true);
                }}>
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
