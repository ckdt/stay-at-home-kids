import React, {useEffect, useState} from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/reset.css';
import './assets/css/typography.css';
import './assets/css/main.css';
import data from './data/index';
import List from './components/List';
import Cards from './components/Cards';

const App = () => {
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    console.log(data);
    setAppData(data);
  }, [data]);

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <div className="content">
        <Cards data={appData} />
      </div>
    </div>
  );
};

export default App;
