import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeNavigation from './Container/Home/HomeNavigation';
import SignUpNavigation from './Container/UserSignUp/SignUpNavigation'
import SplashScreen  from './SplashScreen'
class Main extends Component {
    constructor(props){
        super(props);
            this.state={
                currentScreen:'Splash',
                isLoggedIn:false
            }
            
        }
        
    UNSAFE_componentWillMount() {
        setTimeout(() => { this.setState({ currentScreen: "Home" }) }, 3000);
    }

    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <SplashScreen/> : this.state.isLoggedIn ? <HomeNavigation/> : <SignUpNavigation/>
        return mainScreen
    }
}
 
export default Main;