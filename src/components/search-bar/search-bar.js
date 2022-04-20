import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import styled from '@emotion/styled'
import './search-bar.css'
import {DATASET} from '../../moc/dataset'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const SearchInput = styled.input`
    color: grey;
    font-size: 25px;
    border: 2px solid blue;
    border-radius: 3px;
`;
const List = styled.ul`
    list-style: none;
    font-family: 'Marck Script', cursive;
`;
const ListItetm = styled.li`
    color: darkblue;
    margin: 5px;
`;


export default function SearchBar() {
    const {id} = useParams();
    let history = useHistory();

    const [searchTerm, setSearchTerm] = useState(id || '');
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
        <Container>
            <SearchInput
                placeholder='Search'
                value={searchTerm}
                onChange={onChangeSearchInput}
            />
            <List>
                {searchResults.map(item => (
                    <ListItetm key={item}>
                        {item}
                    </ListItetm>
                ))}
            </List>
        </Container>
    )
}