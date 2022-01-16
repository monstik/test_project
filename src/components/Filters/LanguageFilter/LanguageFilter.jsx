import React from 'react';
import './LanguageFilter.scss';
import classNames from "classnames";


import unitedKindomIcon from '../../../assets/img/unitedKingdomIcon.svg';
import russianIcon from '../../../assets/img/russiaIcon.svg';
import ukraineIcon from '../../../assets/img/ukraineIcon.svg';
import germanyIconIcon from '../../../assets/img/germany 1.svg';
import poslishIcon from '../../../assets/img/polandIcon.svg';
import spainIcon from '../../../assets/img/spainIcon.svg';

import LanguageItem from "../components/LanguageItem/LanguageItem";

const LanguageFilter = ({className}) => {
    return (
        <div className={classNames(className, 'languageFilter')}>
            <h2>Владение языками</h2>
            <hr/>

          <LanguageItem icon={unitedKindomIcon} language={'Английский'} count={603}/>
          <LanguageItem icon={russianIcon} language={'Русский'} count={603}/>
          <LanguageItem icon={ukraineIcon} language={'Украинский'} count={603}/>
          <LanguageItem icon={germanyIconIcon} language={'Немецкий'} count={603}/>
          <LanguageItem icon={poslishIcon} language={'Польский'} count={603}/>
          <LanguageItem icon={spainIcon} language={'Испанский'} count={603}/>


        </div>
    );
};

export default LanguageFilter;