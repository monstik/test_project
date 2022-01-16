import React from 'react';
import './SummaryItem.scss';
import emptyPhoto from '../../../assets/img/emptyPhoto.svg';
import pinIcon from '../../../assets/img/blackPinIcon.svg';
import greenStatusIcon from '../../../assets/img/greeenStatusIcon.svg';
import heartIcon from '../../../assets/img/heartIcon.svg';
import dotsIcon from '../../../assets/img/threeDotsIcon.svg';
import {ageFormat} from "../../../utils/ageFormat";
import {diffDate} from "../../../utils/diffDate";
import MoreActionsPopup from "./MoreActionsPopup/MoreActionsPopup";

const SummaryItem = ({photo, first_name, birthday, workExperience}) => {

    return (
        <div className='summary'>
            <div className='summary__photoBlock'>
                <img src={photo ? photo : emptyPhoto} alt="emptyPhoto"/>

            </div>
            <div className='summary__titleBlock'>
                <h1 className='summary__titleBlock__title'>Продавец - консультант</h1>
                <div className='summary__titleBlock__group'>
                    <h2 className='name'>
                        {first_name ? first_name : 'Имя не указано'},
                        {ageFormat(diffDate(new Date().getTime(), birthday)) || ' Возраст не указан'}</h2>
                    <div className='location'>
                        <img src={pinIcon} alt="location"/>
                        <p>Kyiv, Ukraine</p>
                    </div>
                </div>

            </div>
            <div className='summary__experienceBlock'>
                {workExperience[0] &&
                <p>
                    {workExperience[0].company_name}
                    -
                    {ageFormat(diffDate(workExperience[0].date_from, workExperience[0].date_to))}
                </p>}

                {workExperience[1] &&
                <p>
                    {workExperience[1].company_name}
                    -
                    {ageFormat(diffDate(workExperience[1].date_from, workExperience[1].date_to))}
                </p>}
            </div>
            <div className='summary__activityBlock'>
                <p>Обновлено 9 минут назад</p>
                <div className='summary__activityBlock__status'>
                    <img src={greenStatusIcon} alt="status"/>
                    <p>Онлайн</p>
                </div>
            </div>
            <div className='summary__actionsBlock'>
                <button className='actions__like'>
                    <img src={heartIcon} alt="like"/>
                </button>
                <MoreActionsPopup
                    trigger={
                        <button className='actions__moreActions'>
                            <img src={dotsIcon} alt="menu"/>
                        </button>}
                />

            </div>
        </div>
    );
};

export default SummaryItem;