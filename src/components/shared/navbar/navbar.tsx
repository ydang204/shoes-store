import React, { Component, Fragment } from "react";
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
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import logo from "../../../assets/image-logo/logo.png";
import Login from "../../pages/auth/login/login";
import { faSleigh } from "@fortawesome/free-solid-svg-icons";
import Register from "../../pages/auth/register/register";
import { getCategoriesAsync } from "../../../_services/products-api/category-service";
import CategoryResModel from "../../../_models/product-api/res-model/category-res-model";
import { getBrandsAsync } from "../../../_services/products-api/brand-service";
import BrandResModel from "../../../_models/product-api/res-model/brand-res-model";
import LoginReqModel from "../../../_models/user-api/req-model/login-req-model";
import { loginAsync } from "../../../_services/users-api/auth-service";
import { AccountLoginResModel } from "../../../_models/user-api/res-model/login-res-model";
import { orderSubject } from "../../../_services/order-api/order-service";
import { Subscription } from "rxjs";

interface Props extends RouteComponentProps {}

type States = {
  isOpenNavbar: boolean;
  isOpenLoginModal: boolean;
  isOpenRegisterModal: boolean;
  categories: CategoryResModel[];
  brands: BrandResModel[];
  loginReqModel: LoginReqModel;
  isLoggedIn: boolean;
  user?: AccountLoginResModel | null;
  totalCartItem: number;
  subscriptions: Subscription[];
};

class NavBar extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    const isLoggedIn = localStorage.getItem("token") !== null;

    this.state = {
      isOpenNavbar: false,
      isLoggedIn: isLoggedIn,
      user: this.getCurrentUser(),
      isOpenLoginModal: false,
      isOpenRegisterModal: false,
      categories: [],
      brands: [],
      loginReqModel: {
        password: "",
        userName: ""
      },
      totalCartItem: orderSubject.getTotalProducts(),
      subscriptions: []
    };
  }

  componentDidMount() {
    this.getCategories();
    this.getBrands();

    const subscription = orderSubject.getProduct().subscribe(p => {
      const total = orderSubject.getTotalProducts();
      this.setState({ totalCartItem: total });
    });

    this.setState({ subscriptions: [subscription] });
  }

  componentWillUnmount() {
    this.state.subscriptions.forEach(s => s.unsubscribe());
  }

  // Call API region

  getCategories = async () => {
    const res = await getCategoriesAsync();
    this.setState({ categories: res.data.items });
  };

  getBrands = async () => {
    const res = await getBrandsAsync();
    this.setState({ brands: res.data.items });
  };

  handleLogin = async () => {
    const res = await loginAsync(this.state.loginReqModel);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.account));
    this.setState({ isLoggedIn: true, isOpenLoginModal: false });
  };

  // End call API region

  getCurrentUser(): AccountLoginResModel | null {
    const user = localStorage.getItem("user");
    return user ? (JSON.parse(user) as AccountLoginResModel) : null;
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

  handleLoginInputChange = (event: any) => {
    const { value, name } = event.target;
    let newModel = {} as any;
    newModel[name] = value;

    this.setState({
      loginReqModel: { ...this.state.loginReqModel, ...newModel }
    });
  };

  logOut = () => {
    this.setState({ isLoggedIn: false }, () => {
      localStorage.clear();
      this.props.history.push("/");
      this.setState({});
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
                {!this.state.isLoggedIn && (
                  <Fragment>
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
                        handleInputChange={this.handleLoginInputChange}
                        handleSubmit={this.handleLogin}
                      />
                      <Register
                        isOpen={this.state.isOpenRegisterModal}
                        toggleModal={this.toggleResgisterModal}
                      />
                    </NavItem>
                    <NavItem onClick={this.toggleLoginModal}>
                      <FontAwesomeIcon icon={faUser} />
                    </NavItem>
                    <NavItem onClick={this.toggleLoginModal}>
                      <Link to="/cart">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </NavItem>
                  </Fragment>
                )}

                {this.state.isLoggedIn && this.state.user && (
                  <Fragment>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav>
                        Xin chào {this.state.user.fullName}
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>Tài khoản của tôi</DropdownItem>
                        <DropdownItem onClick={this.logOut}>
                          Đăng xuất
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                      <Link to="/cart">
                        <i className="fa fa-shopping-cart"></i>
                        <span className="badge badge-info">
                          {this.state.totalCartItem}
                        </span>
                      </Link>
                    </NavItem>
                  </Fragment>
                )}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <MenuNav
          categories={this.state.categories}
          brands={this.state.brands}
        />
      </div>
    );
  }
}

export default withRouter(NavBar);
