import React, {useState} from 'react';
import classNames from "classnames";
import './GenderFilter.scss';

const GenderFilter = ({className}) => {

    const [activeItem, setActiveItem] = useState(1);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className={classNames(className, 'genderFilter')}>
            <h2>Пол</h2>
            <hr/>
            <div className='genderFilter__buttonsGroup'>
                <button
                    className={activeItem === 1 ? 'active' : ''}
                    onClick={() => onSelectItem(1)}
                >
                    Любой
                </button>
                <button
                    className={activeItem === 2 ? 'active' : ''}
                    onClick={() => onSelectItem(2)}
                >
                    Женщины
                </button>
                <button
                    className={activeItem === 3 ? 'active' : ''}
                    onClick={() => onSelectItem(3)}
                >
                    Мужчины
                </button>
            </div>

        </div>
    );
};

export default GenderFilter;