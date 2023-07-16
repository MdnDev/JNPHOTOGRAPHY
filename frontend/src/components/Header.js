import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ width: "100%" }}
    >
      <LinkContainer to="/">
        <Navbar.Brand>Jean-Noël Vireeye</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>PORTFOLIO</Nav.Link>
          </LinkContainer>

          {/* <LinkContainer to="/boutique">
                            <Nav.Link>
                            BOUTIQUE
                            </Nav.Link>
                        </LinkContainer> */}
          <LinkContainer to="/about">
            <Nav.Link>QUI-SUIS-JE ?</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/contact">
            <Nav.Link>CONTACT</Nav.Link>
          </LinkContainer>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id="username">
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profil</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Item onClick={logoutHandler}>
                Se deconnecter
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user"></i>Se connecter
              </Nav.Link>
            </LinkContainer>
          )}
          {userInfo && userInfo.isAdmin && (
            <NavDropdown title="Admin" id="adminmenu">
              <LinkContainer to="/admin/userlist">
                <NavDropdown.Item>Utilisateurs</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/photolist">
                <NavDropdown.Item>Photos</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/expolist">
                <NavDropdown.Item>Photos (Portfolio)</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/orderlist">
                <NavDropdown.Item>Commandes</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          )}

          {/* <LinkContainer to="/cart">
                            <Nav.Link>
                            <i className="fas fa-shopping-cart"></i>
                            PANIER
                            </Nav.Link>
                            
                        </LinkContainer>
                         */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
