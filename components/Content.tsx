import React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {observer} from 'mobx-react/native';
import { Button } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';
import ListProvider, {ListProviderState} from '../ListProvider';
import Item from './Item/Item';
import Changer from './Changer';

@observer
export default class Content extends React.Component<{}, {}> {
  list= new ListProvider;
  input = new Changer;
  index: number = 0;

  onChange = (value: string) => {
    this.input.change(value)
  }

  addItem = () => {
    this.index += 1;
    const item: ListProviderState = {
      name: this.input.value,
      index: `item${this.index}`
    }
    this.list.addItem(item);
    this.input.change('');
  }

  removeItem = (item: ListProviderState) => {
    this.list.removeListItem(item)
  }

  render() {
    const list = this.list.list
    return (
      <View style={s.container}>
        <View>
          <Text style={s.welcome}>
            Welcome to BringMe!
          </Text>
        </View>
        <ScrollView style={s.scroll}>
          {list &&
            list.map( item => {
              return (
                <Item 
                  key={item.index} 
                  item={item}
                  remove={this.removeItem}
                />
              )
            })
          }
        </ScrollView>
        
        <View style={s.input}>
          <TextField 
            onChangeText={this.onChange} 
            label="item" 
            value={this.input.value} 
            lineWidth={1}
            style={s.textfield}
          />
          <Button raised primary text="add" icon="add" onPress={this.addItem}/>
        </View>
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex:1
  },
  welcome: {
    fontSize: 10,
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center'
  },
  scroll: {
    flex: 2
  },
  item: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  input: {
    display: 'flex',
    padding: 5,
    margin: 5,
    justifyContent: 'flex-end',
    flex: 1
  },
  textfield: {
    alignSelf: 'stretch'
  }
});

