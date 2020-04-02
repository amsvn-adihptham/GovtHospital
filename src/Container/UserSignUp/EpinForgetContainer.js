import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import EpinForgetComponent from '../../Components/UserSignUp/EpinForgetComponent';

const mockData = {
  email: 'a',
  password: 'p',
};
export default class EpinForgetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hidePassword: true,
      warning: 'Incorrect email or password. Try again',
      isVerified: this.props.isVerified,
    };
  }

  handleEmail = text => {
    this.setState({email: text});
  };

  handlePassword = text => {
    this.setState({password: text});
  };

  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  verifyUser = (emailRef, passwordRef) => {
    const {email, password} = this.state;
    if (email === mockData.email && password === mockData.password) {
      this.setState({isVerified: true});
      this.props.navigatetoEpinCreateComponent();
    } else {
      // Alert.alert('Wrong');
      // emailRef.blur();
      passwordRef.blur();
      this.setState({
        isVerified: false,
        email: '',
        password: '',
      });
    }
  };

  render() {
    return (
      <View>
        <EpinForgetComponent
          navigatetoEpinCreateComponent={
            this.props.navigatetoEpinCreateComponent
          }
          closeModal={this.props.closeModal}
          handleEmail={this.handleEmail}
          handlePassword={this.handlePassword}
          setPasswordVisibility={this.setPasswordVisibility}
          hidePassword={this.state.hidePassword}
          verifyUser={this.verifyUser}
          isVerified={this.state.isVerified}
          email={this.state.email}
          password={this.state.password}
        />
      </View>
    );
  }
}
