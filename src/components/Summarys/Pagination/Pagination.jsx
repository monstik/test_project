import React from 'react';
import './Pagination.scss';


import rightArrow from '../../../assets/img/rightArrow.svg'
import leftArrow from '../../../assets/img/leftArrow.svg'

import {setCurrentPage} from "../../../reducers/summariesReducer";
import {useDispatch,} from "react-redux";
import {createPages} from "../../../utils/pageCreator";

const Pagination = ({pagesCount, currentPage}) => {

    const dispatch = useDispatch();

    const pages = []

    createPages(pages, pagesCount, currentPage)


    return (
        <div className="pagination">

            <button
                onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                className='pagination__arrow'
                disabled={currentPage === 1}
            >
                <img src={leftArrow} alt="lArrow"/>
            </button>
            <div className='pagination__pages'>
                {pages.map((page, index) => {


                    return (
                        <div key={index}>
                            {(index === 2 && currentPage < pagesCount - 3) &&
                            <button
                                className='pagination__buttons'
                                key={'separator'}
                            >
                                ...
                            </button>
                            }

                            <button
                                key={'page' + index}
                                className={currentPage === page ? "current pagination__buttons" : 'pagination__buttons'}
                                onClick={() => dispatch(setCurrentPage(page))}>{page}
                            </button>
                        </div>

                    )
                })}
            </div>


            <button
                onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                className='pagination__arrow'
                disabled={!(currentPage < pagesCount)}
            >
                <img src={rightArrow} alt="rArrow"/>
            </button>
        </div>
    );
};

export default Pagination;