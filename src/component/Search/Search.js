import React from 'react';
import './Search.css'

function Search() {
    return (
        <div className='search'>
            <div className='search_in'>
                <form>
                    <input type='text' style={{ width: '15vw' }} placeholder={`搜点什么呢`}></input>
                    <input type='submit' className='submit' value={`搜索`}></input>
                </form>
            </div>
        </div>
    )
}

export default Search