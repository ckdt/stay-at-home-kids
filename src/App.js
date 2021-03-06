import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './assets/css/reset.css';
import './assets/css/typography.css';
import './assets/css/main.css';
import Airtable from 'airtable';

import Home from './views/home';

const base = new Airtable({apiKey: 'keyoOQCAKm3JPcYMp'}).base('appoRZTZkSI0ga1wO');

const App = () => {
  const [appIsLoaded, setAppIsLoaded] = useState(false);
  const [initData, setInitData] = useState([]);
  const [appData, setAppData] = useState([]);
  const [appCategories, setAppCategories] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);

  const handleHomeClick = () => {
    console.log('Home');
    setActiveCategories([]);
    setAppData(initData);
  };

  const filterData = (activeCategories) => {
    setAppIsLoaded(false);
    if (activeCategories && activeCategories.length > 0) {
      const results = initData.filter((e) => activeCategories.includes(e.category));

      if (results) {
        setAppData(results);
        console.log(results);
      } else {
        console.error('no matches');
        return;
      }
    } else {
      setAppData(initData);
    }
  };

  useEffect(() => {
    // Load the "Content" sheet data from Airtable
    base('Content')
      .select({
        view: 'Grid view',
        sort: [{field: 'Date', direction: 'desc'}],
        filterByFormula: 'IF(({Published} = 1), "true")',
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }

        // Fetch Categories records and All data in separate arrays.
        const tmpCategories = [];
        const tmpAppData = [];

        records.forEach(function (record) {
          // Push Categories
          tmpCategories.push(record.get('Category'));

          // Push Data
          tmpAppData.push({
            title: record.get('Title'),
            source: record.get('Source'),
            url: record.get('URL'),
            ages: record.get('Ages'),
            lang: record.get('Language'),
            category: record.get('Category'),
          });
        });

        setAppCategories(Array.from(new Set(tmpCategories)));
        setInitData(tmpAppData); // inital data, to restore to.
        setAppData(tmpAppData);
      });
  }, []);

  useEffect(() => {
    console.log('effect', activeCategories);
    filterData(activeCategories);
  }, [activeCategories]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Home
              data={appData}
              categories={appCategories}
              activeCategories={activeCategories}
              setActiveCategories={setActiveCategories}
              handleHomeClick={handleHomeClick}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
