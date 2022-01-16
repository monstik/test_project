import React from 'react';
import './TypeOfEmploymentFilter.scss';
import classNames from "classnames";
import FilterItem from "../components/FilterItem/FilterItem";

const TypeOfEmploymentFilter = ({className}) => {
    return (
        <div className={classNames(className, 'typeOfEmploymentFilter')}>
            <h2>Тип зайнятости</h2>
            <hr/>
            <FilterItem label={'Полная занятость'} count={'34567'}/>
            <FilterItem label={'Неполная занятость'} count={'876'}/>
            <FilterItem label={'Удаленная работа'} count={'1234'}/>
        </div>
    );
};

export default TypeOfEmploymentFilter;