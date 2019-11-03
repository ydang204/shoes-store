import React, { Component } from 'react';
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
  DropdownItem
} from 'reactstrap';

import './navbar.scss';
import SearchBox from './search-box/search-box';
import MenuNav from './menu-nav/menu-nav';

type Props = {};

type States = {
  isOpen: boolean;
};

class NavBar extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="navbar-container fixed-top">
        <div className="row navbar-row">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Shoes Store</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <SearchBox />
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>Account</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Sign in</DropdownItem>
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem>Log out</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <MenuNav />
      </div>
    );
  }
}

export default NavBar;
