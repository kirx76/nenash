import {action, computed, makeAutoObservable, observable} from "mobx";

export default class TestStore {
  @observable _test = 0;

  constructor() {
    makeAutoObservable(this)
  }

  @computed get test() {
    return this._test
  };

  @action increase = () => this._test++;
  @action decrease = () => this._test--;
}