import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import type RootStore from "../../stores/RootStore";

@inject('uiStore')
@inject('testStore')
@observer
export default class MainPage extends Component<RootStore, null> {
  render() {
    const {testStore, uiStore} = this.props;

    return <div>
      <div>
        {testStore.test}
        {uiStore.deviceType}
      </div>
      <div>
        <button onClick={testStore.increase}>add</button>
        <button onClick={testStore.decrease}>remove</button>
      </div>
    </div>
  }
}