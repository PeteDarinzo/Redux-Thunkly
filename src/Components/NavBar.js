import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";

const NavBar = () => {

  return (
    <div>
      <Navbar className="px-5">
        <Nav vertical>
          <h1>THUNKLY</h1>
          <h4>The future of blogging, today</h4>
          <NavItem className="m-1">
            <NavLink exact to="/">Blog</NavLink>
          </NavItem>
          <NavItem className="m-1">
            <NavLink to="/new">Add a new post</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;