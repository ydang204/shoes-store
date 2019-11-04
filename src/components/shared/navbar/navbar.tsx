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
  Media,

} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import './navbar.scss';
import SearchBox from './search-box/search-box';
import MenuNav from './menu-nav/menu-nav';
import { Link } from 'react-router-dom';
import logo1 from '../../image/logo.png';

type Props = {};

type States = {
  isOpen: boolean;
};

var imgStyle = {
  maxWidth: "175px",
  maxheight: "30px",
  cursor: "pointer",
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
            <Media left top href="#">
                <Media style={imgStyle} object src={logo1} alt="Shoes Store"/>
            </Media>
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
