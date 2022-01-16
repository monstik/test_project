import React from 'react';
import photoFilterIcon from "../../../assets/img/photoFilterIcon.svg";
import Switch from "react-switch";
import './PhotoFilter.scss';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage, setPhotoFilter} from "../../../reducers/summariesReducer";



const PhotoFilter = ({className}) => {

    const photoFilter = useSelector(state => state.summaries.photoFilter);
    const dispatch = useDispatch();

    const handleChange = (nextChecked) => {
        dispatch(setCurrentPage(1))
        dispatch(setPhotoFilter(nextChecked))
    };

    return (
        <div className={classNames(className, 'photoFilter')}>
            <img src={photoFilterIcon} alt="photoFilter"/>
            <p>Только с фотографией</p>

            <Switch
                onChange={handleChange}
                checked={photoFilter}
                className="photoFilter__switch"
                handleDiameter={14}
                uncheckedIcon={false}
                checkedIcon={false}
                height={16}
                width={28}
                offColor="#EAEAEA"
                onColor="#E5E5FF"
                activeBoxShadow="0px 0px 1px 3px rgba(0, 0, 0, 0.2)"
                offHandleColor="#5B5B5B"
                onHandleColor="#000046"
            />
        </div>
    );
};

export default PhotoFilter;