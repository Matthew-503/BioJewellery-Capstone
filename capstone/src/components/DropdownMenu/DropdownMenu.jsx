// Author: Naomy
// Version 1.0
// Date: 21/03/2023

import { DropdownItem } from '../../components';
import './DropdownMenu.css';

const DropdownMenu = () => {
    return (
        <div className="flex flex-col dropdownMenu">
            <ul className='flex flex-col gap-4'>
                <DropdownItem text = {"Profile"} link={'/account'}/>
                <DropdownItem text = {"History"} link={'/history'}/>
                <DropdownItem text = {"Logout"} link={'/'}/>
            </ul>
        </div>
    )
}

export default DropdownMenu;

