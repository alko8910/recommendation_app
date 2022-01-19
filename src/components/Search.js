import React, {useState} from 'react'

function Search({search}) {
    const [word, setWord] = useState()

const handleChange = (e) => {
    e.preventDefault();
    {(!word) ? alert ('Please eneter a book title') : search(word)}
    /*
    if(!word){
        alert('Please eneter a book title')
    }else{
        search(word)
    }
    */
}
    return (
        <form onSubmit={handleChange}>
            <input
            type='text'
            placeholder='Enter the book title'
            onChange={(e) => setWord(e.target.value)}
            ></input>
            <button onClick={handleChange} className='search-button'>Search</button>
        </form>
    )
}

export default Search
