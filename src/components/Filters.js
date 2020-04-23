import React from 'react';

import FilterLink from '../components/FilterLink';

const Filters = ({categories, activeCategories, setActiveCategories}) => {
  if (categories) {
    const listItems = categories.map((item, index) => {
      return (
        <FilterLink
          key={`cat_${index}`}
          label={item}
          activeCategories={activeCategories}
          setActiveCategories={setActiveCategories}
        />
      );
    });

    return <ul className="categories">{listItems}</ul>;
  } else {
    return null;
  }
};

export default Filters;
