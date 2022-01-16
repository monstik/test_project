import React from 'react';

import 'rc-slider/assets/index.css';
import './Filters.scss';
import AgeFilter from "./AgeFilter/AgeFilter";
import PhotoFilter from "./PhotoFilter/PhotoFilter";
import GenderFilter from "./GenderFilter/GenderFilter";
import SalaryFilter from "./SalaryFilter/SalaryFilter";
import ExperienceFilter from "./ExperienceFilter/ExperienceFilter";
import TypeOfEmploymentFilter from "./TypeOfEmploymentFilter/TypeOfEmploymentFilter";
import EducationFilter from "./EducationFilter/EducationFilter";
import LanguageFilter from "./LanguageFilter/LanguageFilter";
import classNames from "classnames";

import closeFiltersIcon from '../../assets/img/closeIcon.svg';


const Filters = ({isOpen, closeFilters}) => {



    return (
        <div className={classNames('filters mobile', {
            'open' : isOpen
        })}>
            <div className='filters__header'>
                <h1>
                    Фильтры
                </h1>
                <button
                    className='desktopClose'
                    onClick={() => closeFilters(true)}
                >
                    <img src={closeFiltersIcon} alt="close"/>
                </button>

                <button
                    className='mobileClose'
                    onClick={() => closeFilters(false)}
                >
                    <img src={closeFiltersIcon} alt="close"/>
                </button>
            </div>


            <PhotoFilter className='filterContainer'/>

            <AgeFilter className='filterContainer'/>

            <GenderFilter className='filterContainer'/>

            <SalaryFilter className='filterContainer'/>

            <ExperienceFilter className='filterContainer'/>


            <LanguageFilter className='filterContainer'/>

            <TypeOfEmploymentFilter className='filterContainer'/>

            <EducationFilter className='filterContainer'/>



        </div>
    );
};

export default Filters;