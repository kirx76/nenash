import UiStore from "./UiStore";
import TestStore from "./TestStore";

export default class RootStore {
  uiStore?: UiStore;
  testStore?: TestStore;

  constructor(initialData = null) {
    this.uiStore = new UiStore();
    this.testStore = new TestStore();
  }
}