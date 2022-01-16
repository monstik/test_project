import React, {useState} from 'react';
import './Header.scss';

import languageSphere from '../../assets/img/lenguage_sphere.svg';
import arrowDown from '../../assets/img/arrow_down.svg';

import userTypeSmallArrow from '../../assets/img/userTypeSmallArrow.svg';

import avatarIcon from '../../assets/img/avatarIcon.svg';
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {

    const [activeItem, setActiveItem] = useState(2);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className='header'>
            <div className='navBar'>
                <div className='navBar__userTypeDesktop'>
                    <ul>
                        <li
                            className={activeItem === 1 ? 'active' : ''}
                            onClick={() => onSelectItem(1)}
                            title='Соискатель'
                        >
                            Соискатель
                        </li>
                        <hr/>
                        <li
                            className={activeItem === 2 ? 'active' : ''}
                            onClick={() => onSelectItem(2)}
                            title='Работодатель'
                        >
                            Работодатель
                        </li>
                        <hr/>
                        <li
                            className={activeItem === 3 ? 'active' : ''}
                            onClick={() => onSelectItem(3)}
                            title='HR'
                        >
                            HR
                        </li>
                    </ul>
                </div>
                <div className='navBar__userTypeMobile'>
                    <p>Соискатель</p>
                    <img src={userTypeSmallArrow} alt="arrow"/>
                </div>
                <div className='navBar__rightSide'>
                    <div className='navBar__language'>
                        <img src={languageSphere} alt="languageSphere"/>
                        <p>RU</p>
                        <img src={arrowDown} alt='arrowDown'/>
                    </div>
                    <button className='loginButton'>
                        Войти
                    </button>

                </div>

            </div>
            <div className='zaglushka_auth'>
                <img src={avatarIcon} alt="avatar"/>
                <p>Юра Марченко</p>
            </div>
            <SearchBar/>
        </div>
    );
};

export default Header;