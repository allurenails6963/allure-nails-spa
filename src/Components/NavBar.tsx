
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Pages-CSS/Navbar.css";

function DefaultTopNavBar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => setMenuOpen((open) => !open);
    const handleMenuClose = () => setMenuOpen(false);

    return (
        <>
            <div className="business-name">Allure Nails & Spa</div>
            <div className="navbar-top">
                <nav className="nav-right desktop-menu">
                    <Link
                        to="/home"
                        className={`nav-link${location.pathname === "/home" ? " active" : ""}`}
                        onClick={handleMenuClose}
                    >
                        Home
                    </Link>
                    <Link
                        to="/services"
                        className={`nav-link${location.pathname === "/services" ? " active" : ""}`}
                        onClick={handleMenuClose}
                    >
                        Services
                    </Link>
                    <Link
                        to="/contact-us"
                        className={`nav-link${location.pathname === "/contact-us" ? " active" : ""}`}
                        onClick={handleMenuClose}
                    >
                        Contact Us
                    </Link>
                </nav>
                <div className="mobile-menu-icon" onClick={handleMenuToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                {menuOpen && (
                    <div className="mobile-dropdown">
                        <Link
                            to="/home"
                            className={`nav-link${location.pathname === "/home" ? " active" : ""}`}
                            onClick={handleMenuClose}
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className={`nav-link${location.pathname === "/services" ? " active" : ""}`}
                            onClick={handleMenuClose}
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact-us"
                            className={`nav-link${location.pathname === "/contact-us" ? " active" : ""}`}
                            onClick={handleMenuClose}
                        >
                            Contact Us
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default DefaultTopNavBar;