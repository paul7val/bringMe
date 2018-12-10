
import {observable} from 'mobx';
import {
  Animated
} from 'react-native';

export default class SpringProvider {
  @observable value = new Animated.Value(0);
  max: number;
  min: number;
  fr: number;
  tr: number;
  open: boolean = true;
  animating: boolean = false;

  constructor(max: number = 10, fr: number = 10, tr: number = 40, min: number = 0) {
    this.max = max;
    this.min = min;
    this.fr = fr;
    this.tr = tr;
  }

  toggle = () => {
    if (!this.animating)
    this.value.setValue(this.open ? this.min : this.max);
    return new Promise(res => {
      this.animating = true;
      Animated.spring(
        this.value,
        {
          toValue: this.open ? this.max : this.min,
          friction: this.fr,
          tension: this.tr
        }).start(() => {
          this.open = !this.open;
          this.animating = false;
          res();
        }
      );
    })
  }
}