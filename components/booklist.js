import { useEffect, useState } from "react";
import BookItem from './bookitem'

const BookList = () => {
    const [books, setBooks] = useState('')
    const getData = () => {
        const request = fetch('/api/books')
            .then((res) => res.json())
            .then((data) => setBooks(data.message))
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <ul>
                {books &&
                    books.map(({ title, description, imgUrl}, index) => (
                        <BookItem title={title} imgUrl={imgUrl} description={description} key={index} />
                ))}
            </ul>
        </div>
    );
}

export default BookList;