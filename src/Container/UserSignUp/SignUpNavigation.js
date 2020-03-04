import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import SignUpContainer from './SignUpContainer';
import ForgotPasswordContainer from './ForgotPasswordContainer';
import EpinCreateContainer from './EpinCreateContainer';
import EpinLoginContainer from './EpinLoginContainer';
import EpinForgetContainer from './EpinForgetContainer';
import FAQContainer from './FAQContainer';
import HomeNavigation from '../Home/HomeNavigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createAppContainer } from 'react-navigation';
import { Transition } from 'react-native-reanimated'


const SignUp = createAnimatedSwitchNavigator(
{
    LoginContainer:LoginContainer,
    SignUpContainer: SignUpContainer,
    ForgotPasswordContainer:ForgotPasswordContainer,
    EpinCreateContainer:EpinCreateContainer,
    EpinLoginContainer:EpinLoginContainer,
    EpinForgetContainer:EpinForgetContainer,
    FAQContainer:FAQContainer,
    HomeNavigation:HomeNavigation
},
{
    transition: (
    <Transition.Together>
        <Transition.Out
        type="slide-left"
        durationMs={300}
        interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={400} />
    </Transition.Together>
    ),
},
{
    initialRouteName: 'LoginContainer',
}
);

const SignUpNavigation = createAppContainer(SignUp);

export default SignUpNavigation;
