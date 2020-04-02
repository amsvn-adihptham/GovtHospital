import React, {Component} from 'react';
import {View, Keyboard} from 'react-native';
import EpinLoginComponent from '../../Components/UserSignUp/EpinLoginComponent';
import {grid, color} from '../../Constants';

export default class EpinLoginContainer extends Component {
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

  createdPin = this.props.navigation.getParam('pin', 'NO-pin');

  navigatetoEpinForgetComponent = () => {
    this.props.navigation.navigate('EpinForgetContainer');
  };

  navigatetoEpinCreateComponent = _id => {
    this.props.navigation.navigate('EpinCreateContainer');
  };

  checkCode = pin => {
    if (pin !== this.createdPin) {
      this.pinInput.current.shake().then(() => this.setState({code: ''}));
      Keyboard.dismiss();
      if (this.state.attempts > 1) {
        let {attempts} = this.state;
        attempts = attempts - 1;
        this.setState({
          attempts,
          attemptMessage: `Wrong ePIN! You have ${attempts} more ${
            attempts !== 1 ? 'tries' : 'chance'
          }.`,
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
      Keyboard.dismiss();
      this.setState({
        code: '',
        attempts: grid.totalAttempts,
        attemptMessage: 'success',
        attemptMessage_Color: color.right,
      });
    }
  };

  handleTextChange = code => {
    this.setState({code, attemptMessage: ''});
  };

  render() {
    return (
      <View>
        <EpinLoginComponent
          navigatetoEpinCreateComponent={this.navigatetoEpinCreateComponent}
          code={this.state.code}
          attemptMessage={this.state.attemptMessage}
          attemptMessage_Color={this.state.attemptMessage_Color}
          pinInput={this.pinInput}
          handleTextChange={this.handleTextChange}
          checkCode={this.checkCode}
        />
      </View>
    );
  }
}
