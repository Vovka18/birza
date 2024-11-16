import React, { useState } from 'react';
import { ReactComponent as DropdownIcon } from '../../assets/icons/main-dropdown.svg'
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('15 минут');
  
  const options = ['1 минута', '5 минут', '15 минут', '30 минут', '1 час'];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-selected" onClick={handleToggle}>
        {selectedOption} <span className="dropdown-arrow"><DropdownIcon/></span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
