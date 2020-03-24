import {Dimensions, StatusBar} from 'react-native';

export const color = {
  body: '#41CCC9',
  highlight: '#4D98CF',
  shadow: '#5A5386',
  button: '#524364',
  white: '#FFFFFF',
  black: '#000000',
  wrong: '#900',
  right: '#090',
};

export const grid = {
  unit: 16,
  headline: 32,
  title: 24,
  subheader: 18,
  body: 14,
  caption: 12,
  label: 10,
  lineHeight: 1.5,
  navIcon: 20,
  border: 2,
  borderRadius: 2,
  lowOpacity: 0.4,
  mediumOpacity: 0.6,
  highOpacity: 0.8,
  screenWidth: Math.round(Dimensions.get('screen').width),
  screenHeight: Math.round(Dimensions.get('screen').height),
  statusbarHeight: StatusBar.currentHeight,
  forgotIcon: 'phonelink-lock',
  logoImage_Http_URL: {
    uri:
      'https://cdn.clipart.email/7dd95b6e86cfb39037fa78c2f06a92fd_guidelines-to-use-survey-maps_1571-1600.png',
  },
  totalAttempts: 5,
};