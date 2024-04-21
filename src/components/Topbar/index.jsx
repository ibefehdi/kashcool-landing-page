import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import logo from "../../assets/K.svg";
import "./topbar.css";

import { useTranslation } from "react-i18next";

import i18next from "i18next";
import i18n from "../../i18n";
import { BrowserRouter as Router } from "react-router-dom";
export const TopBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
    const lngs = {
        en: { nativeName: "English" },
        ar: { nativeName: "Arabic" },
    };
    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo" style={{ width: "100px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto"> 
                            <Nav.Link
                                href="#home"
                                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                                onClick={() => onUpdateActiveLink("home")}
                            >
                                {t("Home")}
                            </Nav.Link>
                            <Nav.Link
                                href="#brands"
                                className={activeLink === "brands" ? "active navbar-link" : "navbar-link"}
                                onClick={() => onUpdateActiveLink("brands")}
                            >
                                {t("Brands")}
                            </Nav.Link>
                            <Nav.Link
                                href="#contact"
                                className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
                                onClick={() => onUpdateActiveLink("contact")}
                            >
                                {t("Contact us")}
                            </Nav.Link>
                        </Nav>
                        <Nav className="ms-auto"> 
                            <Button variant="outline-success" className="me-2">Sign Up</Button>
                            <Button variant="outline-primary">Log In</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Router>
    );
};
export default TopBar;