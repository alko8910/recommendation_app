import React from 'react'
import Book from './Book'

const BookList = ({booksInfo = []}) => {
    return (
        <div className='book-container'>
            {booksInfo.map((book, i) => (
                <Book  
                key={i}
                img={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                publisher= {book.volumeInfo.publisher}
                pageCount={book.volumeInfo.pageCount}
                averageRating={book.volumeInfo.averageRating}
                ratingsCount={book.volumeInfo.ratingsCount}
                />
           ) )}
        </div>
    )
}

export default BookList
