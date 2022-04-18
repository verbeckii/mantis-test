import React, { useState, useEffect } from 'react';
import './search-bar.css'
import {DATASET} from '../../moc/dataset'


export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const onChangeSearchInput = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = DATASET.filter(item =>
            item.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    return(
        <div className='search-bar'>
            <input
                type='text'
                placeholder='Search'
                value={searchTerm}
                onChange={onChangeSearchInput}
            />
            <ul>
                {searchResults.map(item => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}