// Author: Naomy
// Version 1.0
// Date: 21/03/2023

import './DropdownItem.css';

const DropdownItem = (props) => {
    return (
        <li className='dropdownItem'>
            <a href={props.link}> {props.text} </a>
        </li>
    )
}

export default DropdownItem;

