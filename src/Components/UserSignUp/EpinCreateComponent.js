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
    if (this.props.pinVerified && this.state.code === this.state.vcode) {
      Alert.alert('Congrats!', this.props.message, [
        {
          text: 'OK',
          onPress: () => this.props.navigatetoEpinLogin(),
        },
      ]);
    } else if (this.props.retry) {
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
          <View>
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
          <TouchableOpacity
            style={{backgroundColor: color.pale_white}}
            onPress={() => this.props.setCreatepin(false)}>
            <View>
              <Text style={{fontSize: 20}}>Reset</Text>
            </View>
          </TouchableOpacity>
          <Text>code:{this.props.code}</Text>
          <Text>vcode:{this.props.vcode}</Text>
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
    justifyContent: 'center',
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
    // height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
