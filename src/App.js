import React, { useState } from 'react';
import getBooks from './api/getBooks';
import './App.css';
import BookList from './components/BookList';
import Search from './components/Search';
import Modal from './components/Modal';

function App() {
const [booksInfo, setBooksInfo] = useState([])
const [openModal, setOpenModal] = useState(false);
const [randomNum, setRandomNum] = useState();
const [disabled, setDisabled] = useState(true)
const [message, setMessage] = useState()

const search = async (keyword) => {
  const response = await getBooks.get("/search", {
    params: {
      q: keyword,
    }
  })
setBooksInfo(response.data.items)
setDisabled(false)
setMessage('')
}

const recommendedBook = () => {
  setOpenModal(true);
  setRandomNum(Math.floor(Math.random() * 11))
}
function reloadPage() {
  window.location.reload(false);
}

 if(openModal) {
   return <Modal booksInfo={booksInfo} openModal={openModal} setOpenModal={setOpenModal} randomNum={randomNum}/>
 }
  return (
    <div className="App">
      <div className='center'>
        <div  className='main-div'>
          <div>
            <div>Book Recommender</div>
            <div>Which book should you read?</div>
          </div>
          <Search 
            search={search}
            setMessage={setMessage}
          />
          <div style={{fontSize: 'larger'}}>
            {message}
          </div>
            {booksInfo ? (
              <button onClick={recommendedBook} disabled={disabled} className='search-random-book' >Search the books and chose recommended</button>
            ) : (
              <button onClick={reloadPage} disabled={disabled} className='search-random-book'>No books with that name! Try again!</button>
            )}
        </div>
        <BookList 
          booksInfo={booksInfo}
        />
      </div>
    </div>
  );
}

export default App;
