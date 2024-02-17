import Dropdown from "./components/Dropdown";
import { useState } from 'react';

function App() {
  const [ selectedValue, setSelectedValue] = useState(null);
  const options = [
    {
      label: "Red",
      value:"red"
    },
    {
      label: "Green",
      value:"green"
    },
    {
      label: "Blue",
      value:"blue"
    }
  ];

  const handleSelect = (option) => {
    setSelectedValue(option);
  }
  return (
    <div className="flex">
      <Dropdown options={options} value={selectedValue} onChange={handleSelect}/>
      <Dropdown options={options} value={selectedValue} onChange={handleSelect}/>
    </div>
  );
}

export default App;
