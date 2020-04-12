import React, {useState, useEffect} from 'react';

const Cards = ({data}) => {
  const [isLoaded, setIsLoaded] = useState(false);

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
          <a href={url} target="_blank" rel="noopener noreferrer">
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
          </a>
        </div>
      );
    });

    return <section className="cards">{items}</section>;
  } else {
    return null;
  }
};
export default Cards;
