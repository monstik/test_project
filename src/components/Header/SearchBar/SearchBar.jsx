import React, {useState} from 'react';
import './SeacrhBar.scss';
import zoomIcon from '../../../assets/img/zoomIcon.svg'
import pinIcon from '../../../assets/img/pinIcon.svg';

const SearchBar = () => {
    const [search, setSearch] = useState();
    const [location, setLocation] = useState();

    const onSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const onLocationChange = (event) => {
        setLocation(event.target.value);
    }

    return (
        <div className='searchBar'>
            <div className='searchBar__container search'>
                <img src={zoomIcon} alt="zoom"/>
                <input
                    className='desktopSearch'
                    placeholder='На какую должность вы ищете кандидата?'
                    type="text"
                    value={search}
                    onChange={onSearchChange}
                />
                <input
                    className='mobileSearch'
                    placeholder='Поиск'
                    type="text"
                    value={search}
                    onChange={onSearchChange}
                />
            </div>
            <div className='searchBar__container location'>
                <img src={pinIcon} alt="pin"/>
                <input
                    placeholder='Город'
                    type="text"
                    value={location}
                    onChange={onLocationChange}
                />
            </div>
            <button className='searchBar__button'>Найти кандидатов</button>
        </div>
    );
};

export default SearchBar;