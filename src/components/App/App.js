import React from 'react';
import List from '../List/List.js';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
     <div id="app">
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['Things to do ', <sup key='1'>soon!</sup>]} img={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"}/>
      </main>
     </div>
    )
  }
}

export default App;
