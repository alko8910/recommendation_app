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


const search = async (keyword) => {
  const response = await getBooks.get("/search", {
    params: {
      q: keyword,
    }
  })
setBooksInfo(response.data.items)
setDisabled(false)
}

const recommendedBook = () => {
  setOpenModal(true);
  setRandomNum(Math.floor(Math.random() * 11))
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
        />
        <button onClick={recommendedBook} disabled={disabled}>Search the books and chose recommended</button>
        </div>
        <BookList 
          booksInfo={booksInfo}
        />
      </div>
    </div>
  );
}

export default App;
