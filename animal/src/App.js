import AnimalShow from "./AnimalShow";
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (<div>
        <button onClick={handleClick}>Add animal</button>
        <p>Count:{count}</p>
    </div>);
}

export default App;