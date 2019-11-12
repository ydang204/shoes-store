import React, { Component } from "react";
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
  DropdownItem
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import "./navbar.scss";
import SearchBox from "./search-box/search-box";
import MenuNav from "./menu-nav/menu-nav";
import { Link } from "react-router-dom";
import logo from "../../../assets/image-logo/logo.png";
import Login from "../../pages/auth/login/login";
import { faSleigh } from "@fortawesome/free-solid-svg-icons";
import Register from "../../pages/auth/register/register";

type Props = {};

type States = {
  isOpenNavbar: boolean;
  isOpenLoginModal: boolean;
  isOpenRegisterModal: boolean;
};

class NavBar extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpenNavbar: false,
      isOpenLoginModal: false,
      isOpenRegisterModal: false
    };
  }

  toggleNavbar = () => {
    this.setState({ isOpenNavbar: !this.state.isOpenNavbar });
  };

  toggleLoginModal = () => {
    this.setState({ isOpenLoginModal: !this.state.isOpenLoginModal });
  };

  toggleResgisterModal = () => {
    this.setState({
      isOpenLoginModal: false,
      isOpenRegisterModal: !this.state.isOpenRegisterModal
    });
  };

  render() {
    return (
      <div className="navbar-container fixed-top">
        <div className="row navbar-row">
          <Navbar color="light" light expand="md">
            <Link to="/">
              <img className="logo" src={logo} alt="Shoes Store" />
            </Link>
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse isOpen={this.state.isOpenNavbar} navbar>
              <SearchBox />
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <button
                    className="btn btn-login"
                    onClick={this.toggleLoginModal}
                  >
                    Kết nối | Đăng nhập
                  </button>
                  <Login
                    isOpen={this.state.isOpenLoginModal}
                    toggleModal={this.toggleLoginModal}
                    toggleRegisterModel={this.toggleResgisterModal}
                  />
                  <Register
                    isOpen={this.state.isOpenRegisterModal}
                    toggleModal={this.toggleResgisterModal}
                  />
                </NavItem>
                <NavItem>
                  <Link to="/login">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>Tài khoản</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Tài khoản của tôi</DropdownItem>
                    <DropdownItem>Đăng xuất</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link to="/cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="badge badge-info">0</span>
                  </Link>
                </NavItem>
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
