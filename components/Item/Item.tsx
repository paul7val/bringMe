import React from "react"
import { ListProviderState } from '../../ListProvider'
import { observer } from 'mobx-react/native';
import {
  Animated,
  Button
} from 'react-native';
import SpringProvider from './SpringProvider';

interface Props {
  remove: any;
  item: ListProviderState;
}

@observer
export default class Item extends React.Component<Props, {}> {
  heightProvider= new SpringProvider(40, 60, 10);
  height = this.heightProvider.value;
  marginProvider= new SpringProvider(2, 60, 10);
  margin = this.marginProvider.value;

  componentDidMount() {
    this.heightProvider.toggle()
    this.marginProvider.toggle()
  }

  close = () => {
    const {item, remove} = this.props;
    this.marginProvider.toggle();
    this.heightProvider.toggle().then(() => remove(item));
  }

  render() {
    const {item} = this.props;
    return (
      <Animated.View 
        style={{backgroundColor: '#EBEBEB', marginHorizontal: 5, marginVertical: this.margin, alignSelf: 'stretch', height: this.height, overflow: 'hidden'}} 
      >
        <Button
          onPress={this.close}
          title={item.name}
        />
      </Animated.View>
    )
  }
}
