
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {Book} from './Book'
import {books} from'./books'


const getBook = (id) => {
  const book = books.find((book) => book.id === id)
  console.log(book.title)
}

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((b,idx) => {
        return <Book {...b} key={b.id} getBook={getBook}  number={idx}/>
      })}
    </section>
  )
}









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);



