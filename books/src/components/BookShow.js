import BookEdit from './BookEdit';
import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useBooksContext();

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleFormSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>

    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleFormSubmit}/>
    }

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='book'/>
            {content}
            <div className="actions">
                <button className='edit' onClick={handleEditClick}>edit</button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;