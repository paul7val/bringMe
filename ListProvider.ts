
import {observable} from 'mobx';

export interface ListProviderState {
  name: string;
  index: string;
}

const init: ListProviderState = {
  name: 'Papaja',
  index: 'item0bla'
}

export default class ListProvider {
  @observable list: ListProviderState[] = [init];

  removeListItem (item: ListProviderState) {
    this.list = this.list.filter((l) => {
      return l.index !== item.index
    })
  }

  addItem(item: ListProviderState) {
    this.list.push(item)
  }
}
