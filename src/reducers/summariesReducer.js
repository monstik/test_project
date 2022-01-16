const SET_SUMMARIES = 'SET_SUMMARIES';
const SET_PHOTO_FILTER = 'SET_PHOTO_FILTER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PAGES_COUNT = 'SET_PAGE_COUNT';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

const defaultState = {
    summaries: [],
    photoFilter: false,
    currentPage: 1,
    pagesCount: 0,
    total_count: 0
}

export default function summariesReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SUMMARIES: {
            return {...state, summaries: action.payload}
        }

        case SET_PAGES_COUNT: {
            return {...state, pagesCount: action.payload}
        }

        case SET_PHOTO_FILTER: {
            return {...state, photoFilter: action.payload}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload}
        }

        case SET_TOTAL_COUNT: {
            return {...state, total_count: action.payload}
        }

        default:
            return state;

    }
}

export const setPhotoFilter = (photoFilter) => ({
    type: SET_PHOTO_FILTER,
    payload: photoFilter
});

export const setSummaries = (summaries) => ({
    type: SET_SUMMARIES,
    payload: summaries
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
});

export const setPagesCount = (pagesCount) => ({
    type: SET_PAGES_COUNT,
    payload: pagesCount
});

export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    payload: totalCount
});