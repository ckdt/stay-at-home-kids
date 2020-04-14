import React, {useState, useEffect, useRef} from 'react';
import ReactGA from 'react-ga';

const Cards = ({data}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  ReactGA.initialize('UA-163473118-1', {
    gaOptions: {
      anonymizeIp: true,
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setIsLoaded(true);
    }
  }, [data]);

  if (isLoaded) {
    const items = data.map((item, index) => {
      const {url, title, source, ages} = item;
      return (
        <div className="card" key={index}>
          <ReactGA.OutboundLink eventLabel={title} to={url} target="_blank" trackerNames={[source]}>
            <div className="card--foreground">
              <div className="card--header">
                <h3 className="header--title">{source}</h3>
              </div>
              <div className="card--body">
                <h2 className="body--title">{title}</h2>
              </div>
              <div className="card--footer">
                <p>ages: {ages}</p>
              </div>
            </div>
            <div className="card--background">&nbsp;</div>
          </ReactGA.OutboundLink>
        </div>
      );
    });

    return <section className="cards">{items}</section>;
  } else {
    return null;
  }
};
export default Cards;
