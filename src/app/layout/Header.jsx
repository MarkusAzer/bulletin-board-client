import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to="/">
                <Navbar.Brand>
                {' Bulletin Board '}
                </Navbar.Brand>
            </Link>
        </Navbar>
    );
}

export default Header;
