
import {observable} from 'mobx';

export default class Changer {
  @observable value: any

  change = (val: any) => {
    this.value = val;
  }
}