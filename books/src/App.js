import './index.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBook] = useState([]);

    const createBook = (title) => {
        console.log("new book to be created: ", title);
    }

    return (
        <div>
            <BookCreate onCreate={createBook}/>
        </div>
    );
}

export default App;