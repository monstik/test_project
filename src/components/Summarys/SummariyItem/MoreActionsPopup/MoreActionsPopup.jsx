import React from 'react';
import Popup from "reactjs-popup";
import './MoreActionsPopup.scss'

const MoreActionsPopup = ({trigger}) => {
    return (
        <Popup
            trigger={trigger}
            position={'left top'}
            repositionOnResize={true}
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}

            arrow={false}
        >
            <div className="menu">
                <button className="menu__item"><p>Пожаловаться</p></button>
                <button className="menu__item"><p>Скрыть кандидата</p></button>

            </div>
        </Popup>
    );
};

export default MoreActionsPopup;