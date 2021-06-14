import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import RootStore from "../stores/RootStore";
import {observer, Provider} from "mobx-react";
import styles from '../styles/index.module.scss'
import Header from "../components/Header";
import '/styles/custom.scss';

const MyApp = observer(({Component, pageProps}: AppProps) => {
  const rootStore = new RootStore();

  return <Provider {...rootStore}>
    <div className={styles.Main}>
      <Header/>
      <Component {...pageProps} />
    </div>
  </Provider>
});

export default MyApp
