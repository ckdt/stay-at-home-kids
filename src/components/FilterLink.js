import React, {useState} from 'react';

const FilterLink = ({label, activeCategories, setActiveCategories}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (activeCategories.includes(label)) {
      let tmpActiveCategories = remove(activeCategories, label);
      setActiveCategories(tmpActiveCategories);
    } else {
      setActiveCategories((activeCategories) => [...activeCategories, label]);
    }
    // toggle active state
    if (isActive ? setIsActive(false) : setIsActive(true));
    console.log('click', isActive);
  };
  function remove(array, element) {
    return array.filter((el) => el !== element);
  }

  return (
    <li
      className={`filter--item ${isActive ? 'is-active' : ''}`}
      onClick={() => handleClick({label, activeCategories, setActiveCategories})}
    >
      <span>{label}</span>
    </li>
  );
};

export default FilterLink;
