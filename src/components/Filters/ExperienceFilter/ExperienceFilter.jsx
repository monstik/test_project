import React, {useState} from 'react';
import './ExperienceFilter.scss';
import classNames from "classnames";
import Switch from "react-switch";
import studentIcon from '../../../assets/img/studentIcon.svg';
import FilterItem from "../components/FilterItem/FilterItem";

const ExperienceFilter = ({className}) => {

    const [checkedSwitch, setCheckedSwitch] = useState(false);
    const handleChangeSwitch = nextChecked => {
        setCheckedSwitch(nextChecked);
    };

    return (
        <div className={classNames(className, 'experienceFilter')}>
            <h2>Опыт работы</h2>
            <hr/>

            <div className='experienceFilter__checkBoxGroup'>
                <FilterItem label={'Без опыта'} count={'603'}/>
                <FilterItem label={'До 1 года'} count={'603'}/>
                <FilterItem label={'От 1 до 2 лет'} count={'603'}/>
                <FilterItem label={'От 2 до 5 лет'} count={'603'}/>
                <FilterItem label={'От 5 до 10 лет'} count={'603'}/>
                <FilterItem label={'Более 10 лет'} count={'603'}/>
            </div>

            <div className='experienceFilter__switch'>
                <img src={studentIcon} alt=""/>
                <p>Только студенты</p>
                <Switch
                    onChange={handleChangeSwitch}
                    checked={checkedSwitch}
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
        </div>
    );
};

export default ExperienceFilter;