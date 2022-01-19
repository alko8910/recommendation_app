import React, {useState} from 'react'

function Search({search, setMessage}) {
    const [word, setWord] = useState()

const handleChange = (e) => {
    e.preventDefault();
   {(!word) ? setMessage('Please enter a book title') : search(word)}

    
}
    return (
        <form onSubmit={handleChange}>
            <input
            type='text'
            placeholder='Enter the book title'
            onChange={(e) => setWord(e.target.value.replace(/[^A-Za-z0-9\s]+/,''))}
            ></input>
            <button onClick={handleChange} className='search-button'>Search</button>
    
        </form>
    )
}

export default Search
