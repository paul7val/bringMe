
import {observable} from 'mobx';
import {
  Animated
} from 'react-native';

export default class SpringProvider {
  @observable value = new Animated.Value(0);
  max: number;
  min: number = 0;
  fr: number = 10;
  tr: number = 40;
  open: boolean = true;
  animating: boolean = false;

  constructor(max: number, fr: number, tr?: number, min?: number) {
    this.max = max;
    this.min = min ? min : this.min;
    this.fr = fr;
    this.tr = tr ? tr : this.tr;
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