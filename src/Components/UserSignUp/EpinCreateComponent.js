import React, {Component, useEffect} from 'react';
import {grid, color} from '../../Constants';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  BackHandler,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import * as Animatable from 'react-native-animatable';

export default class EpinCreateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backAction);
  }

  backAction = () => {
    if (this.props.passOneStatus) {
      this.props.setCreatepin(false);
      return true;
    }
    return false;
  };

  renderAlert = () => {
    if (this.props.retry) {
      return (
        <Animatable.Text
          animation="wobble"
          duration={800}
          style={{marginTop: 10, color: color.wrong, fontSize: grid.unit}}>
          {this.props.message}
        </Animatable.Text>
      );
    }
  };

  renderPinView() {
    if (!this.props.passOneStatus) {
      return (
        <Animatable.View
          animation="bounceInLeft"
          duration={1150}
          delay={100}
          style={{alignItems: 'center'}}>
          <Text style={styles.pintitle}>Create ePIN</Text>
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
            value={this.props.code}
            restrictToNumbers={true}
            onTextChange={this.props.handleTextChange}
            onFulfill={this.props.onFulFill}
          />
        </Animatable.View>
      );
    } else {
      return (
        <Animatable.View
          ref={this.props.vpinView}
          animation="bounceInRight"
          duration={1000}
          delay={100}
          style={{
            alignItems: 'center',
          }}>
          <Text style={[styles.pintitle]}>Re-enter ePIN</Text>
          <SmoothPinCodeInput
            ref={this.props.vpinInput}
            placeholder={<View style={[styles.pinInputPlaceholder]} />}
            mask={<View style={styles.pinInputMask} />}
            maskDelay={0}
            cellSpacing={15}
            codeLength={4}
            password={true}
            cellStyle={null}
            cellStyleFocused={null}
            value={this.props.vcode}
            restrictToNumbers={true}
            onTextChange={this.props.handlevTextChange}
            onFulfill={this.props.verifyCode}
          />
        </Animatable.View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={color.shadow} barStyle="light-content" />
        {/* Header */}
        <View style={styles.subContainerHeader}>
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
              Create ePIN
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
        {/* Body */}
        <View style={styles.subContainerBody}>
          {this.renderPinView()}
          {this.renderAlert()}
        </View>
        {/* Footer */}
        <View style={styles.subContainerFooter}>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: grid.screenHeight - grid.statusbarHeight,
    alignItems: 'center',
    backgroundColor: color.body,
  },
  subContainerHeader: {
    flex: 0.4,
    // height: '40%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subContainerBody: {
    flex: 0.2,
    // height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainerFooter: {
    flex: 0.4,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerLabel: {
    color: color.shadow,
    fontSize: grid.caption,
  },
  pintitle: {
    color: color.shadow,
    fontSize: grid.unit * 1.5,
    marginBottom: 8,
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
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
});
