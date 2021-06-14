import {action, computed, makeAutoObservable, observable, runInAction} from "mobx";
import {TDeviceTypes, TWindowDimensions} from "./types";

export default class UiStore {

  @observable _deviceType: TDeviceTypes = 'desktop';
  @observable _title = 'NeNash';
  @observable _windowDimensions: TWindowDimensions = {
    width: 1920,
    height: 1080
  }

  constructor(initialData = null) {
    makeAutoObservable(this)
    this._title = initialData?.title ? initialData.title : 'NeNash';
    if (typeof window !== "undefined") {
      this.setWindowDimensions(window)
      window.onresize = (event) => {
        this.setWindowDimensions(event.currentTarget)
      }
    }
  }

  @computed get windowDimensions() {
    return this._windowDimensions;
  }

  @computed get deviceType() {
    if (this.windowDimensions.width >= 1201)
      this.setDeviceType('desktop');
    if (this.windowDimensions.width >= 992 && this.windowDimensions.width < 1200)
      this.setDeviceType('laptop');
    if (this.windowDimensions.width >= 769 && this.windowDimensions.width < 992)
      this.setDeviceType('tablet');
    if (this.windowDimensions.width >= 320 && this.windowDimensions.width < 769)
      this.setDeviceType('mobile');
    if (this.windowDimensions.width >= 0 && this.windowDimensions.width < 320)
      this.setDeviceType('beforeMobile');

    return this._deviceType;
  }

  @action updateWindowDimensions = () => {
    this._windowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  @action setWindowDimensions = (window) => {
    runInAction(() => {
      this._windowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
  }

  @action setDeviceType = (type: TDeviceTypes) => this._deviceType = type;

  @action setTitle = (title: string) => this._title = title;

}