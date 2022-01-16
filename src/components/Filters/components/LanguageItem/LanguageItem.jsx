import React, {useState} from 'react';
import blackArrow from "../../../../assets/img/blackArrow.svg";
import radioButtonIcon from "../../../../assets/img/Radiobutton.svg";
import FilterItem from "../FilterItem/FilterItem";
import {uniqueId} from "lodash/util";

import './LanguageItem.scss';
import classNames from "classnames";

const LanguageItem = ({icon, language, count}) => {
    const id = uniqueId('language-');
    const [openAdditionalBlock, setOpenAdditionalBlock] = useState(false);

    const menuHandler = () => {
        setOpenAdditionalBlock(!openAdditionalBlock)
    }

    return (
        <FilterItem className='customize'>
            <div className='mainBlock'>
                <input className='orderInput' id={id} type="checkbox"/>
                <label className='customize__orderLabel' htmlFor={id}>
                    <img className='countryIcon' src={icon} alt={language}/>
                    {language}
                </label>
                <p className='count'>{count}</p>
                <button
                onClick={menuHandler}
                >
                    <img src={blackArrow} alt="menuArrow"/>
                </button>
            </div>
            <div className={classNames('additionalBlock',{
                'open' : openAdditionalBlock
            })}>
                <div className='additionalBlock__item'>
                    <img src={radioButtonIcon} alt="zaglushka"/>
                    <p>(А1) – начальный</p>
                    <p className='count'>73</p>
                </div>
                <div className='additionalBlock__item'>
                    <img src={radioButtonIcon} alt="zaglushka"/>
                    <p>(А2) – ниже среднего</p>
                    <p className='count'>73</p>
                </div>
                <div className='additionalBlock__item'>
                    <img src={radioButtonIcon} alt="zaglushka"/>
                    <p>(В1) – средний</p>
                    <p className='count'>73</p>
                </div>
                <div className='additionalBlock__item'>
                    <img src={radioButtonIcon} alt="zaglushka"/>
                    <p>(В2) – выше среднего</p>
                    <p className='count'>73</p>
                </div>
                <div className='additionalBlock__item'>
                    <img src={radioButtonIcon} alt="zaglushka"/>
                    <p>(C1) – продвинутый</p>
                    <p className='count'>73</p>
                </div>
                <div className='additionalBlock__item'>
                    <img src={radioButtonIcon} alt="zaglushka"/>
                    <p>(C2) – профессиональный уровень владения</p>
                    <p className='count'>73</p>
                </div>
            </div>
        </FilterItem>
    );
};

export default LanguageItem;