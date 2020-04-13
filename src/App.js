import React, {useEffect, useState} from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/reset.css';
import './assets/css/typography.css';
import './assets/css/main.css';
import data from './data/index';
//import List from './components/List';
import Cards from './components/Cards';
import Airtable from 'airtable';
const base = new Airtable({apiKey: 'keyoOQCAKm3JPcYMp'}).base('appoRZTZkSI0ga1wO');

const App = () => {
  const [appData, setAppData] = useState([]);
  useEffect(() => {
    base('Content')
      .select({
        view: 'Grid view',
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }

        const tmpAppData = [];

        records.forEach(function (record) {
          tmpAppData.push({
            title: record.get('Title'),
            source: record.get('Source'),
            url: record.get('URL'),
            ages: record.get('Ages'),
          });
          console.log('Retrieved', record.get('Title'));
        });
        setAppData(tmpAppData);
      });
  }, [base]);

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
