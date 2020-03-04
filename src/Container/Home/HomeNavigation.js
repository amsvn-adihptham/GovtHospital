import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator,DrawerActions} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,withNavigation  } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import ProfileContainer from './ProfileContainer';
import HomeContainer from './HomeContainer';
import AboutHealthDepartmentContainer from './AboutHealthDepartmentContainer';
import HospitalDetailsContainer from './HospitalDetailsContainer';
import AppSupportContainer from './AppSupportContainer';
import DoctorDetailsContainer from './DoctorDetailsContainer';
import ReviewHistoryContainer from './ReviewHistoryContainer';
import ReviewHospitalContainer from './ReviewHospitalContainer';
import DashboardContainer from './DashboardContainer';


const DrawerNavigator = createDrawerNavigator({
    HomeContainer:{
        screen: HomeContainer
    }
},{
    initialRouteName: 'HomeContainer',
    contentComponent: DashboardContainer,
    drawerWidth: 250
});

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Icon  style={{ paddingLeft: 10 ,fontSize:20,color: 'white'}}  name="bars" /> 
    }else{
        return <Icon  style={{ paddingLeft: 10 ,fontSize:18,color: 'white'}}  name="arrow-left" />
    }
}


const NavStack = createStackNavigator(
{
    
     DrawerNavigator:{
        screen: DrawerNavigator,
         navigationOptions: {
             headerShown:false,
         }  
            
        
    },
    AppSupportContainer : { screen: AppSupportContainer ,
        navigationOptions:{
            title: 'Notifications',
            headerStyle: {
                backgroundColor:'#421C52'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
        },
         DoctorDetailsContainer: { screen:  DoctorDetailsContainer,
        navigationOptions:{
            title: 'Order History',
            headerStyle: {
                backgroundColor:'#421C52'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
        },
        HomeContainer: { screen: HomeContainer,
        navigationOptions:{
            title: 'Support',
            headerStyle: {
                backgroundColor:'#421C52'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
        },
        ProfileContainer : { screen: ProfileContainer,  
        navigationOptions:{
            title: 'Edit Profile',
            headerStyle: {
                backgroundColor:'#421C52'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
    },
     HospitalDetailsContainer : { screen:  HospitalDetailsContainer,  
        navigationOptions:{
            title: 'Account Setting',
            headerStyle: {
                backgroundColor:'#421C52'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
    },
    ReviewHistoryContainer : { screen: ReviewHistoryContainer,  
        navigationOptions:{
            title: 'Order Details',
            headerStyle: {
                backgroundColor:'#421C52'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
    },
    ReviewHospitalContainer : { screen:  ReviewHospitalContainer,  
        navigationOptions:{
            title: 'Account Setting',
            headerStyle: {
                backgroundColor:'#421C52'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
    },
   
},
 {
    initialRouteName: "DrawerNavigator"
}
);

const HomeNavigation = createAppContainer(NavStack);

export default HomeNavigation;
