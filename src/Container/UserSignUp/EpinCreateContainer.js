import React, {Component} from 'react';
import {View, Text, Keyboard} from 'react-native';
import EpinCreateComponent from '../../Components/UserSignUp/EpinCreateComponent';
import {grid, color} from '../../Constants';

export default class EpinCreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      vcode: '',
      passOneStatus: false,
    };
  }

  pinInput = React.createRef();
  vpinInput = React.createRef();
  vpinView = React.createRef();

  navigatetoEpinLoginComponent = () => {
    this.props.navigation.navigate('EpinLoginContainer', {
      pin: this.state.code,
    });
  };

  verifyCode = pin => {
    Keyboard.dismiss();
    if (pin === this.state.code) {
      this.setState({
        message: 'New ePIN is created successfully.',
        pinVerified: true,
      });
    } else {
      this.setCreatepin(false);
      this.setState({
        message: 'ePIN mismatch! ePIN is not created.',
        pinVerified: false,
        retry: true,
      });
    }
  };

  onFulFill = code => {
    this.setState({code, passOneStatus: true});
    this.setRetry(false);
  };

  handleTextChange = code => {
    this.setState({code});
  };
  handlevTextChange = vcode => {
    this.setState({vcode});
  };

  setRetry = retry => {
    this.setState({retry});
  };

  setCreatepin = passOneStatus => {
    this.setState({
      code: '',
      vcode: '',
      retry: false,
      pinVerified: false,
      passOneStatus,
    });
  };

  render() {
    return (
      <View>
        <EpinCreateComponent
          code={this.state.code}
          vcode={this.state.vcode}
          message={this.state.message}
          pinVerified={this.state.pinVerified}
          passOneStatus={this.state.passOneStatus}
          retry={this.state.retry}
          navigatetoEpinLogin={this.navigatetoEpinLoginComponent}
          handleTextChange={this.handleTextChange}
          handlevTextChange={this.handlevTextChange}
          onFulFill={this.onFulFill}
          verifyCode={this.verifyCode}
          pinInput={this.pinInput}
          vpinInput={this.vpinInput}
          vpinView={this.vpinView}
          setCreatepin={this.setCreatepin}
        />
      </View>
    );
  }
}
