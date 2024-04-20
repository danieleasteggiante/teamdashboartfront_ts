import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Nav pills>
            <NavItem>
                <NavLink
                    href="#">
                    Dashboard
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    Team Staff
                </NavLink>
            </NavItem>
        </Nav>
    );
}

export default NavMenu;