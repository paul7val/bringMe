import React from "react"
import { TextInput, StyleSheet, View } from "react-native"

interface Props {
  onChange(value: string): void
  value: string
}

interface State {
}

export default class Input extends React.Component<Props, State> {

  render() {
    return (
      <View style={s.root}>
        <TextInput
          style={s.input}
          onChangeText={(value) => this.props.onChange(value)}
          value={this.props.value}
        />
      </View>
    )
  }
}

// s

const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexDirection: 'row',
    borderColor: 'gray', 
    borderWidth: 1,
  },
  input: {
    display: 'flex',
    alignItems: 'center'
  }
})
