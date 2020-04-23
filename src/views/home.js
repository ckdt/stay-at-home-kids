import React from 'react';
import ReactGA from 'react-ga';

import logo from '../assets/images/logo.svg';
import Cards from '../components/Cards';
import Menu from '../components/Menu';

import Filters from '../components/Filters';

const Home = ({data, categories, activeCategories, setActiveCategories, handleHomeClick}) => {
  ReactGA.initialize('UA-163473118-1', {
    gaOptions: {
      anonymizeIp: true,
    },
  });
  ReactGA.pageview('/home');

  return (
    <>
      <header className="header">
        <img src={logo} className="logo" alt="logo" onClick={() => handleHomeClick()} />
        <Menu />
      </header>
      <div className="content">
        <Filters
          categories={categories}
          activeCategories={activeCategories}
          setActiveCategories={setActiveCategories}
        />
        <Cards data={data} />
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
    </>
  );
};

export default Home;
