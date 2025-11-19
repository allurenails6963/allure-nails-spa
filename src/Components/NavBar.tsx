import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import "../Pages-CSS/Navbar.css";

function DefaultTopNavBar() {
    const location = useLocation();

    return (
        <>
            <div className="business-name">
                Allure Nails & Spa
            </div>
            <div className="navbar-top">
                <Nav variant="underline" className="nav-right">
                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/home"
                            active={location.pathname === "/home"}
                        >
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/services"
                            active={location.pathname === "/services"}
                        >
                            Services
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/contact-us"
                            active={location.pathname === "/contact-us"}
                        >
                            Contact Us
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </>
    );
}

export default DefaultTopNavBar;