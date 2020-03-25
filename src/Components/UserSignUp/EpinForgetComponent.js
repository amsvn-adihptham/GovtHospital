import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {grid, color} from '../../Constants';

const DismissKeyboard = props => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {props.children}
    </TouchableWithoutFeedback>
  );
};

export default class EpinForgetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Header Container */}

        <View style={styles.headingContainer}>
          <View style={styles.titleContainer}>
            <Text style={{fontSize: grid.unit * 1.5, color: color.pale_white}}>
              Verify By E-mail
            </Text>
          </View>
          <View style={styles.closeButton}>
            <TouchableOpacity onPress={this.props.closeModal}>
              <Icon
                name="close"
                size={grid.unit * 2}
                color={color.pale_white}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Form Container */}

        <View style={styles.formContainer}>
          {/* Email View */}
          <View>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              autoCompleteType="off"
              autoFocus={true}
              blurOnSubmit={false}
              onChangeText={this.props.handleEmail}
              ref={input => {
                this.emailInput = input;
              }}
              onSubmitEditing={() => {
                this.passwordInput.focus();
              }}
            />
            <View style={styles.placeholder}>
              <Text style={{fontSize: grid.unit}}>Email</Text>
            </View>
          </View>
          {/* Password View */}
          <View>
            <TextInput
              style={styles.input}
              secureTextEntry={this.props.hidePassword}
              onChangeText={this.props.handlePassword}
              ref={input => {
                this.passwordInput = input;
              }}
              onSubmitEditing={this.props.verifyUser}
            />
            <TouchableOpacity
              style={styles.visibilityIcon}
              onPress={this.props.setPasswordVisibility}>
              <Icon
                size={grid.unit * 2}
                color="grey"
                name={this.props.hidePassword ? 'visibility' : 'visibility-off'}
              />
            </TouchableOpacity>
            <View style={styles.placeholder}>
              <Text style={{fontSize: grid.unit}}>Password</Text>
            </View>
          </View>
        </View>
        {/* Footer Container*/}

        <DismissKeyboard>
          <View style={styles.footerContainer}>
            <View>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={this.props.verifyUser}>
                <Text style={styles.submitButtonText}>Proceed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </DismissKeyboard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: color.pale_white,
    margin: 5,
    borderRadius: 5,
    elevation: 3,
  },
  headingContainer: {
    height: '15%',
    backgroundColor: color.shadow,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    width: '10%',
    alignItems: 'center',
    backgroundColor: color.wrong_opacity,
    borderRadius: 5,
    right: 5,
    elevation: 3,
  },
  input: {
    paddingLeft: 20,
    opacity: 0.5,
    borderRadius: 5,
    color: color.black,
    borderColor: color.shadow,
    borderWidth: 0.5,
    height: 60,
    fontSize: 20,
    marginHorizontal: 10,
  },
  submitButton: {
    backgroundColor: color.shadow,
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 5,
    elevation: 2,
  },
  submitButtonText: {
    color: color.pale_white,
    fontSize: grid.unit * 1.25,
  },
  placeholder: {
    position: 'absolute',
    height: 25,
    justifyContent: 'center',
    backgroundColor: color.pale_white,
    paddingHorizontal: grid.unit / 2,
    left: 20,
    top: -12.5,
  },
  footerContainer: {
    height: '25%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  formContainer: {
    height: '60%',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  visibilityIcon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
});
