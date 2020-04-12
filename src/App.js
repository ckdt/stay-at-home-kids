import React, {useEffect, useState} from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/main.css';
import data from './data/index';
import List from './components/List';

const App = () => {
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    console.log(data);
    setAppData(data);
  }, [data]);

  return (
    <div className="App">
      <List data={appData} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
