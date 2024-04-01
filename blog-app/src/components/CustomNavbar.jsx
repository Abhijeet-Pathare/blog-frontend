import React, { useState } from 'react';
import { NavLink as ReactLink}  from 'react-router-dom';

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

function CustomNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Navbar {...args}>
      <NavbarBrand tag={ReactLink} to="/">My Blogs</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={ReactLink} to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/signup">
              Signup
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={ReactLink} to="/services">Services</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavLink href="https://youtu.be/ebdqFXCbZ-I?si=b0eQIyhLX8X-oeNR">Youtube</NavLink>
      </Collapse>
    </Navbar>
  </div>
);
}

export default CustomNavbar;