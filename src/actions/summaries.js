import axios from "axios";

import {API_URL} from "../config";
import {setPagesCount, setSummaries, setTotalCount} from "../reducers/summariesReducer";

export const getSummaries = (photo, page) => {
    return async dispatch => {
        try {
            let url = `${API_URL}api/summaries/`

            if(photo) {
                url = `${API_URL}api/summaries/?photo=${photo}`;
            }
            if(page) {
                url = `${API_URL}api/summaries/?photo=false&page=${page}`;
            }
            if(photo && page){
                url = `${API_URL}api/summaries/?page=${page}&photo=${photo}`;
            }



            const response = await axios.get(url);

            dispatch(setSummaries(response.data.results))
            dispatch(setPagesCount(response.data.page_count))
            dispatch(setTotalCount(response.data.total_count))

        } catch (e) {
            alert(e?.response?.data?.message);
        }
    }
}
