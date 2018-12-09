import React from 'react';
import { Component } from 'react';;
import {observer} from 'mobx-react/native';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import Content from './components/Content'


const uiTheme = {
  palette: {
    primaryColor: COLOR.lightBlueA200,
    secondaryColor: COLOR.lightBlue100
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

interface State {
  value: string;
  item: string;
}

@observer
export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <Content />
      </ThemeContext.Provider>
    )
  }
}
