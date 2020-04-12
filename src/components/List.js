import React, {useState, useEffect} from 'react';

const List = ({data}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (data) {
      console.log(data);
      setIsLoaded(true);
    }
  }, [data]);

  if (isLoaded) {
    const items = data.map((item, index) => {
      const {url, title} = item;
      return (
        <li key={index}>
          <a href={url} target="_blank">
            {title}
          </a>
        </li>
      );
    });

    return <ul>{items}</ul>;
  } else {
    return null;
  }
};
export default List;
