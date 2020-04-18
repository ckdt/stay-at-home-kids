import React, {useEffect, useState} from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/reset.css';
import './assets/css/typography.css';
import './assets/css/main.css';
//import List from './components/List';
import Cards from './components/Cards';
import Menu from './components/Menu';
import Airtable from 'airtable';
import ReactGA from 'react-ga';

const base = new Airtable({apiKey: 'keyoOQCAKm3JPcYMp'}).base('appoRZTZkSI0ga1wO');

const App = () => {
  const [appData, setAppData] = useState([]);

  ReactGA.initialize('UA-163473118-1', {
    gaOptions: {
      anonymizeIp: true,
    },
  });
  ReactGA.pageview('/home');

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
          const published = record.get('Published');
          if (published) {
            tmpAppData.push({
              title: record.get('Title'),
              source: record.get('Source'),
              url: record.get('URL'),
              ages: record.get('Ages'),
              lang: record.get('Language'),
            });
          }
        });
        tmpAppData.reverse();
        setAppData(tmpAppData);
      });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <Menu />
      </header>
      <div className="content">
        <Cards data={appData} />
      </div>
      <div className="footer">
        <ReactGA.OutboundLink
          eventLabel="submit yours"
          to="https://airtable.com/shreSbjnmSE8qd5zI"
          target="_blank"
          className="submit--button"
        >
          submit
        </ReactGA.OutboundLink>

        <p className="footer--note">All activities &copy; of their respective owners.</p>
      </div>
    </div>
  );
};

export default App;
