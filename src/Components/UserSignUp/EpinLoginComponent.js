import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';

import EpinForgetContainer from '../../Container/UserSignUp/EpinForgetContainer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {grid, color} from '../../Constants';

export default class EpinLoginComponent extends Component {
  state = {
    modalVisible: false,
    isVerified: true,
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
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
            this.setState({isVerified: false});
          }}>
          <KeyboardAvoidingView
            style={styles.modalView}
            behavior="padding"
            keyboardVerticalOffset={-grid.screenHeight}>
            <EpinForgetContainer
              isVerified={this.state.isVerified}
              closeModal={() => {
                this.setModalVisible(false);
                this.setState({isVerified: false});
              }}
              navigatetoEpinCreateComponent={
                this.props.navigatetoEpinCreateComponent
              }
            />
          </KeyboardAvoidingView>
        </Modal>

        <StatusBar backgroundColor={color.shadow} barStyle="light-content" />

        <View style={styles.container}>
          {/* LOGO AREA for Logo view */}
          <View style={styles.logoview}>
            <View
              style={{
                backgroundColor: color.highlight_opacity,
                width: '100%',
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}>
              <Text
                style={{
                  fontSize: grid.headline,
                  color: color.pale_white,
                  fontWeight: '700',
                }}>
                Login
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                paddingBottom: 15,
                paddingLeft: 5,
              }}>
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
                maskDelay={0}
                cellSpacing={15}
                codeLength={4}
                password={true}
                cellStyle={null}
                cellStyleFocused={null}
                value={code}
                onTextChange={this.props.handleTextChange}
                onFulfill={this.props.checkCode}
                restrictToNumbers={true}
              />
              {/* {this.alert()} */}
            </View>
          </View>
          {/* FOOTER AREA for Footer view */}

          <View style={styles.footerview}>
            <View style={styles.footerSectionTop}>
              <Text
                style={[styles.attempttitle, {color: attemptMessage_Color}]}>
                {attemptMessage === 'success' ? '' : attemptMessage}
              </Text>
            </View>
            <View style={styles.footerSectionBottom}>
              <View style={styles.footerSubSection}>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => {
                    this.setModalVisible(true);
                    this.setState({isVerified: true});
                  }}>
                  <Icon
                    name="phonelink-lock"
                    size={grid.unit * 2}
                    color={color.shadow}
                  />
                  <Text style={styles.footer_ForgotText}>
                    Forgot your ePIN?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Footer Info label */}
            <View style={{paddingBottom: 10, alignItems: 'center'}}>
              <Text style={styles.footerLabel}>
                Stay Safe! Beware of Phishing Emails/SMS!
              </Text>
              <Text style={styles.footerLabel}>
                Never share your ePIN's/OTPs/Passwords with anyone.
              </Text>
            </View>
            {/* Footer Style Bump */}
            <View style={{width: '100%'}}>
              <View
                style={{
                  height: 8,
                  borderColor: color.highlight,
                  backgroundColor: color.highlight,
                  borderWidth: 2,
                }}
              />
              <View
                style={{
                  height: 5,
                  borderColor: color.shadow,
                  backgroundColor: color.shadow,
                  borderWidth: 2,
                }}
              />
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
    justifyContent: 'flex-start',
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
  modalView: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pinviewContent: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  footerSectionTop: {
    height: '35%',
    width: '100%',
    alignItems: 'center',
  },
  footerSectionBottom: {
    height: '50%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  footerLabel: {
    color: color.shadow,
    fontSize: grid.caption,
  },
  footerSubSection: {
    alignItems: 'center',
    marginBottom: 15,
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
    fontSize: grid.unit,
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
