import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import './search-bar.css'
import {DATASET} from '../../moc/dataset'


export default function SearchBar() {
    const {id} = useParams();
    let history = useHistory();

    const [searchTerm, setSearchTerm] = useState(id);
    const [searchResults, setSearchResults] = useState([]);

    const onChangeSearchInput = (event) => {
        setSearchTerm(event.target.value);
        history.push(`/${event.target.value}`);
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