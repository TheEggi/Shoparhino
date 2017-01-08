import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import {Button, IconButton} from 'react-toolbox/lib/button';


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Button href='http://github.com/javivelasco' raised style={{width: 200, height: 200}}>
          ASDFASDFASDF
        </Button>
        <Button icon='bookmark' label='Bookmark' accent />
            <Button icon='bookmark' label='Bookmark' raised primary />

        <div className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
