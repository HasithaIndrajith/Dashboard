import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Navbar,
  Nav,
  Content,
  Container,
  CustomProvider,
  IconButton,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Footer from "rsuite/Footer";
import { Visible, Unvisible } from "@rsuite/icons";
function Layout() {
  const [toggleMode, setToggleMode] = useState(
    localStorage.toggleMode === "true" ? false : true
  );
  useEffect(() => {
  }, [toggleMode]);
  const toggleModeFunc = () => {
    setToggleMode(!toggleMode);
    localStorage.toggleMode = toggleMode;
  };
  return (
    <CustomProvider theme={toggleMode ? "dark" : "light"}>
      <div className="show-fake-browser navbar-page">
        <Container>
          <Navbar>
            <Navbar.Brand href="/">STUDIO .K</Navbar.Brand>
            <Nav>
              <Nav.Item href="/">Home</Nav.Item>
              <Nav.Item href="/about">About Us</Nav.Item>
              <Nav.Menu title="Services">
                <Nav.Item>Company</Nav.Item>
                <Nav.Item>Team</Nav.Item>
                <Nav.Menu title="Contact">
                  <Nav.Item>Via email</Nav.Item>
                  <Nav.Item>Via telephone</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
              <Nav.Item href="/contact">Contact Us</Nav.Item>
            </Nav>
            <Nav pullRight>
              <Nav.Item>
                <IconButton
                  onClick={toggleModeFunc}
                  icon={toggleMode ? <Visible /> : <Unvisible />}
                ></IconButton>
              </Nav.Item>
              <Nav.Item href="/signin">Sign In</Nav.Item>
            </Nav>
          </Navbar>
          <Content>
            <Outlet />
          </Content>

          
        </Container>
      </div>
    </CustomProvider>
  );
}

export default Layout;
