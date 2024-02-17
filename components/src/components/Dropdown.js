import { useState, useEffect, useRef } from "react";
import Panel from "./Panel";
import { FaChevronDown } from "react-icons/fa";

function Dropdown({ options, value, onChange }) {
    const divEl = useRef();
    useEffect(() => {
        const handler = (event) => {
            if(!divEl?.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });
  const handleClick = () => {
    setIsOpen((currentValue) => {
      return !currentValue;
    });
  };

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <FaChevronDown className="text-lg"/>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
