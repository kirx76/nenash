import React, {Component} from "react";
import styles from './Header.module.scss';
import './Header.module.scss';

export default class Header extends Component {

  render() {
    return (
      <nav className={'test'}>
        <span className={'text-primary'}>sss</span>
        <a className="navbar-brand" href="#">Navbar</a>
      </nav>
    )
  }
}