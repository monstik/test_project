import React, {useEffect, useState} from 'react';
import SummaryItem from "./SummariyItem/SummaryItem";
import './Summaries.scss';
import {useDispatch, useSelector} from "react-redux";
import {getSummaries} from "../../actions/summaries";
import Pagination from "./Pagination/Pagination";


const Summaries = () => {

    const summaries = useSelector(state => state.summaries.summaries);
    const photoFilter = useSelector(state => state.summaries.photoFilter);
    const pagesCount = useSelector(state => state.summaries.pagesCount);
    const currentPage = useSelector(state => state.summaries.currentPage);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getSummaries(photoFilter, currentPage))


    }, [photoFilter, currentPage])

    return (
        <div className='summariesList'>
            {summaries.map((item, index) =>

                <SummaryItem
                    workExperience={item.workexperience}
                    first_name={item.first_name}
                    birthday={item.birthday}
                    key={'summary' + index}
                    photo={item.photo}/>
            )}

            <Pagination pagesCount={pagesCount} currentPage={currentPage}/>


        </div>
    );
};

export default React.memo(Summaries);