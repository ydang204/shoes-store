import React from 'react';
import './menu-dropdown.scss';

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

const MenuDropdown: React.FC = () => {
    return (
        <UncontrolledDropdown>
            <DropdownToggle className="menu">
                Trang phục
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}
export default MenuDropdown;