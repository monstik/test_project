import React, {useState} from 'react';
import {Range} from "rc-slider";
import './AgeFilter.scss';
import classNames from "classnames";

const AgeFilter = ({className}) => {

    const [age, setAge] = useState([18, 40]);

    const onAgeChange = (value) => {
        setAge(value)
        setMinAge(value[0])
        serMaxAge(value[1])
    }

    const [minAge, setMinAge] = useState(18);
    const [maxAge, serMaxAge] = useState(40)

    const onMinAgeChange = (event) => {
        setMinAge(event.target.value);
        setAge([event.target.value, maxAge])
    }

    const onMaxAgeChange = (event) => {
        serMaxAge(event.target.value);
        setAge([minAge, event.target.value])
    }

    return (
        <div className={classNames(className, 'ageFilter')}>
            <h2>Возраст</h2>
            <hr/>
            <Range
                min={16}
                max={60}
                step={1}
                value={age}
                onChange={onAgeChange}
                className='ageFilter__range'
            />
            <div className='ageFilter__inputs'>
                <p>от</p>
                <input
                    type="text"
                    onChange={onMinAgeChange}
                    value={minAge}
                />
                <p>до</p>
                <input
                    type="text"
                    onChange={onMaxAgeChange}
                    value={maxAge}
                />
                <p>лет</p>
            </div>
        </div>
    );
};

export default AgeFilter;