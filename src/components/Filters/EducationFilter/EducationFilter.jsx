import React from 'react';
import './EducationFilter.scss';
import classNames from "classnames";
import FilterItem from "../components/FilterItem/FilterItem";

const EducationFilter = ({className}) => {
    return (
        <div className={classNames(className, 'educationFilter')}>
            <h2>Образование</h2>
            <hr/>
            <FilterItem label={'Высшее'} count={'34567'}/>
            <FilterItem label={'Неоконченное высшее'} count={'876'}/>
            <FilterItem label={'Средне-специальное'} count={'1234'}/>
            <FilterItem label={'Среднее'} count={'8764'}/>

        </div>
    );
};

export default EducationFilter;