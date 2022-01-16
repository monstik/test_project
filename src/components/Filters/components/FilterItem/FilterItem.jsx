import React from 'react';
import './FilterItem.scss'

import {uniqueId} from "lodash/util";
import classNames from "classnames";

const FilterItem = ({className, children, label, count}) => {
    const id = uniqueId('filterItem-');
    return (
        <div className={classNames('checkBoxItem', className)}>
            {children ?
                children
                :
                <>
                    <input id={id} type="checkbox"/>
                    <label htmlFor={id}>{label}</label>
                    <p className='count'>{count}</p>
                </>
            }

        </div>

    );
};

export default FilterItem;