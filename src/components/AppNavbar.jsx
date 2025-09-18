import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const AppNavbar = ({filterBysearch}) => {

  const [searchValue, setSearchValue] = useState('');
  const onSearch =()=>{
    filterBysearch(searchValue)
    setSearchValue('')
  }




  return (
    <div>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand
            href="#"
            style={{ color: "#00BFFF", fontWeight: "bold", fontSize: "30px" }}
          >
            مطعم الشرقاوي
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="ابحث هنا"
                className="mx-2"
                aria-label="Search"
                onChange={(e)=>setSearchValue(e.target.value)}
                value={searchValue}
              />
              <Button onClick={onSearch} variant="outline-success">بحث</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
