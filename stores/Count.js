import { observable, action } from 'mobx';

class Count {
  @observable number = 0;

  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }
}

export default new Count();