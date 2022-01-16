import React, {useState} from 'react';
import './SalaryFilter.scss';
import classNames from "classnames";
import {Range} from "rc-slider";
import Switch from "react-switch";


const SalaryFilter = ({className}) => {

    const [salary, setSalary] = useState([1000, 5000]);

    const onSalaryChange = (value) => {
        setSalary(value)
        setMinSalary(value[0])
        serMaxSalary(value[1])
    }

    const [minSalary, setMinSalary] = useState(1000);
    const [maxSalary, serMaxSalary] = useState(5000)

    const onMinSalaryChange = (event) => {
        setMinSalary(event.target.value);
        setSalary([event.target.value, maxSalary])
    }

    const onMaxSalaryChange = (event) => {
        serMaxSalary(event.target.value);
        setSalary([minSalary, event.target.value])
    }

    const [checked, setChecked] = useState(true);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };

    return (
        <div className={classNames(className, 'salaryFilter')}>
            <h2>Желаемая зарплата</h2>
            <hr/>
            <Range
                min={0}
                max={30000}
                step={1000}
                value={salary}
                onChange={onSalaryChange}
                className='salaryFilter__range'
            />
            <div className='salaryFilter__inputs'>
                <p>от</p>
                <input
                    type="text"
                    onChange={onMinSalaryChange}
                    value={minSalary}
                />
                <p>до</p>
                <input
                    type="text"
                    onChange={onMaxSalaryChange}
                    value={maxSalary}
                />
                <p>лет</p>
            </div>
            <div className='salaryFilter__switch'>
                <p>Не показывать без зарплаты</p>
                <Switch
                    onChange={handleChange}
                    checked={checked}
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

export default SalaryFilter;