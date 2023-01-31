import { useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { getCookie } from "../../utils/cookie";
import {
  AuthButtons,
  Container,
  Links,
  LinksContainer,
  Logo,
  Logout,
  MenuIcon,
  NoAuthButton,
  PopOverContent,
  Profile,
  ShoppingCart,
  Wrapper,
} from "./styles";

const Navbar = () => {
  const { auth, cart } = useSelector((state) => state);
  const location = useLocation();

  const handleLogout = async (e) => {
    e.preventDefault();
    await UserService.logout();
    window.location.href = "/";
  };

  return (
    !location.pathname.startsWith("/dashboard") && (
      <Wrapper>
        <Container>
          <Logo>
            <img src="/logo.svg" />
          </Logo>
          <LinksContainer>
            {/* <Search>
          <input type="text" placeholder="Search" />
        </Search> */}
            <Links>
              <NavLink
                className={(props) => (props.isActive ? "active" : "")}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={(props) => (props.isActive ? "active" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className={(props) => (props.isActive ? "active" : "")}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={(props) => (props.isActive ? "active" : "")}
                to="/blogs"
              >
                Blogs
              </NavLink>
              <NavLink
                className={(props) => (props.isActive ? "active" : "")}
                to="/products"
              >
                Products
              </NavLink>
            </Links>
            <Link to="/cart-list">
              <ShoppingCart>
                <img src="/cart.svg" />
                {cart.qty !== 0 && <span className="qty">{cart.qty}</span>}
              </ShoppingCart>
            </Link>
            {!auth.user ? (
              <AuthButtons>
                <Link to="/signup" className="link auth-signup">
                  Sign Up
                </Link>
                <Link to="/signin" className="link auth">
                  Sign In
                </Link>
              </AuthButtons>
            ) : (
              <NoAuthButton>
                {/* <Logout onClick={handleLogout}>Logout</Logout> */}

                <Profile>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="profile"
                  />
                  <span>{JSON.parse(getCookie("userDetails")).username}</span>
                </Profile>
                <PopOverContent className="popover-content">
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                  {JSON.parse(getCookie("userDetails")).role === "VENDOR" && (
                    <a href="/dashboard">Dashboard</a>
                  )}
                  <a href="/profile">Profile</a>
                </PopOverContent>
              </NoAuthButton>
            )}
          </LinksContainer>
          <MenuIcon>
            <img src="/hamburger_icons.svg" alt="hamburger" />
          </MenuIcon>
        </Container>
      </Wrapper>
    )
  );
};

export default Navbar;
