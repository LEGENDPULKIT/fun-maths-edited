import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ChapterScreen from '../screens/ChapterScreen';
import HomeScreen from '../screens/HomeScreen'
import CustomSideDrawer  from './CustomSideDrawer';
import { AppStackNavigator } from './AppStackNavigator';
import Achievment from '../screens/Achievment';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen : HomeScreen,
    },
    Chapters:{
        screen:AppStackNavigator
    },
    Achievments:
    {
      screen:Achievment
    }
  },
  {
    contentComponent:CustomSideDrawer
  },
  {
    initialRouteName : 'Home'
  })