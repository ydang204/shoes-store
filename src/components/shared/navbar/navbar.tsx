import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import './navbar.scss';
import SearchBox from './search-box/search-box';
import MenuNav from './menu-nav/menu-nav';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';

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
            <img className="logo" src={logo} alt="Shoes Store"/>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <SearchBox />
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/login">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>Account</DropdownToggle>
                  <DropdownMenu right>
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
