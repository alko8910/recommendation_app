import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'

const Modal = ({booksInfo, openModal, setOpenModal, randomNum}) => {

    return (
        <Dialog open={openModal} style={{textAlign:'center'}}>
            <DialogTitle>
                Recomanded book is
            </DialogTitle>
            <DialogContent>
                <img src={booksInfo[randomNum].volumeInfo.imageLinks.thumbnail} alt='thumbnail'></img>
                <p>{booksInfo[randomNum].volumeInfo.title}</p>
                <p>{booksInfo[randomNum].volumeInfo.authors}</p>
                <div>Page count: {booksInfo[randomNum].volumeInfo.pageCount}</div>
                <div><a href={booksInfo[randomNum].volumeInfo.previewLink}>Read this book online</a></div>
                <button onClick={() => setOpenModal(false)} className='search-button'>Close</button>
            </DialogContent>
        </Dialog>
    )
}

export default Modal
