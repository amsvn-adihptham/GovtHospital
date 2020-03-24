import React, {Component} from 'react';
import {View} from 'react-native';
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

  navigatetoEpinForgetComponent = () => {
    this.props.navigation.navigate('EpinForgetContainer');
  };

  checkCode = pin => {
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
  };

  render() {
    return (
      <View>
        <EpinLoginComponent
          navigatetoEpinForget={this.navigatetoEpinForgetComponent}
          code={this.state.code}
          attemptMessage={this.state.attemptMessage}
          attemptMessage_Color={this.state.attemptMessage_Color}
          pinInput={this.pinInput}
          handleTextChange={this.handleTextChange}
          checkCode={this.checkCode}
          color={color}
          grid={grid}
        />
      </View>
    );
  }
}
