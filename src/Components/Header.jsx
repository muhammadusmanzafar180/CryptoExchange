    import React from "react";
    import Button from "react-bootstrap/Button";
    import Container from "react-bootstrap/Container";
    import Form from "react-bootstrap/Form";
    import Nav from "react-bootstrap/Nav";
    import Navbar from "react-bootstrap/Navbar";
    import NavDropdown from "react-bootstrap/NavDropdown";
    import { Badge } from 'react-bootstrap';
    //import { BsFilePost } from 'react-icons/bs';
    import { useState, useEffect } from "react";


    function Header(props) {
        // const abc = () => {
        //     console.log(props.isLoggedIn)
        // }
        useEffect(() => {
            console.log(props.isLoggedIn)
        }, [props.isLoggedIn]);
        return (
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>CryptoExchange</Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Login</Nav.Link>
                            <Nav.Link href="#action3">About</Nav.Link>
                            <Nav.Link href="#action4" hidden={!props.isLoggedIn}>Dashboard</Nav.Link>
                            <Nav.Link href="#action5" hidden={!props.isLoggedIn}>Signout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    export default Header;
