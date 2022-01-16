import React, {useState} from 'react';
import Header from "../components/Header/Header";
import Summaries from "../components/Summarys/Summaries";
import Filters from "../components/Filters/Filters";
import './HomePage.scss';
import blueArrow from '../assets/img/blueArrow.svg';
import filtersIcon from '../assets/img/filtersIcon.svg';
import Footer from "../components/Footer/Footer";
import {useSelector} from "react-redux";

const HomePage = () => {
    const total_count = useSelector(state => state.summaries.total_count);
    const [openFilters, setOpenFilters] = useState(false);



    const openFiltersHandler = (value) => {
        setOpenFilters(value);
    }

    return (
        <div>
            <Header/>
            <div className='container'>
                <div className='summariesHeader'>
                    <h1>Мы подобрали <span>{total_count}</span> резюме</h1>
                    <hr/>
                    <div className='summariesHeader__navBar'>
                        <h2>Резюме продавец консультант во Всей Украине</h2>
                        <div className='summariesHeader__navBar__buttons'>
                            <div className='timeSelect'>
                                <p>за все время</p>
                                <img src={blueArrow} alt="arrow"/>
                            </div>
                            <button
                                className='openFilters desktop'
                                onClick={() => openFiltersHandler(false)}
                            >
                                <img src={filtersIcon} alt="filters"/>
                            </button>

                            <button
                                className='openFilters mobile'
                                onClick={() => openFiltersHandler(true)}
                            >
                                <img src={filtersIcon} alt="filters"/>
                            </button>
                        </div>

                    </div>


                </div>
                <div className='content'>
                    <Summaries/>
                    <Filters isOpen={openFilters} closeFilters={(value) => openFiltersHandler(value)}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;