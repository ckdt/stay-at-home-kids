import React, {useState, useEffect} from 'react';

const FilterLink = ({label, activeCategories, setActiveCategories}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!activeCategories.length) {
      setIsActive(false);
    }
  }, [activeCategories]);

  const handleClick = () => {
    if (activeCategories.includes(label)) {
      let tmpActiveCategories = remove(activeCategories, label);
      setActiveCategories(tmpActiveCategories);
    } else {
      setActiveCategories((activeCategories) => [...activeCategories, label]);
    }
    // toggle active state only when categories are active
    if (isActive ? setIsActive(false) : setIsActive(true));
    console.log('click', isActive);
  };
  function remove(array, element) {
    return array.filter((el) => el !== element);
  }

  return (
    <li
      className={`filter--item ${isActive && activeCategories.length ? 'is-active' : ''}`}
      onClick={() => handleClick({label, activeCategories, setActiveCategories})}
    >
      <span>{label}</span>
    </li>
  );
};

export default FilterLink;
