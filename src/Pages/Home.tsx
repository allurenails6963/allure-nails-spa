import "../Pages-CSS/Home.css";
import nailsBackground from "../assets/background-pic.jpg";


export default function Home() {
    return (
        <div className="home-container">
            <div
                id="welcome-and-pic-banner"
                style={{ backgroundImage: `url(${nailsBackground})` }}
            >
                <div className="overlay">
                    <h1 id="welcome-text">Welcome To Allure Nails & Spa</h1>
                </div>
            </div>

            <section className="about-section">
                <h2>Indulge in Luxury & Relaxation</h2>
                <p>
                    At Allure Nails & Spa, we believe self-care should be an experience. Our
                    talented technicians use high-quality products and modern techniques to
                    ensure every visit leaves you feeling refreshed, pampered, and glowing.
                </p>
            </section>

            <section className="services-preview">
                <h2>Our Most Popular Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>Manicure</h3>
                        <p>Classic, gel, and deluxe treatments for elegant nails.</p>
                    </div>
                    <div className="service-card">
                        <h3>Pedicure</h3>
                        <p>Spa-grade relaxation with soothing scrubs and massage.</p>
                    </div>
                    <div className="service-card">
                        <h3>Acrylic & Gel Sets</h3>
                        <p>Beautiful, durable nail enhancements tailored to your style.</p>
                    </div>
                </div>
            </section>

            <section className="hours-location">
                <h2>Visit Us</h2>
                <div className="info-boxes">
                    <div className="info-card">
                        <h3>Hours</h3>
                        <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                        <p>Sun: CLOSED</p>
                    </div>
                    <div className="info-card">
                        <h3>Location</h3>
                        <p>6963 Broadway</p>
                        <p>Lemon Grove, CA 91945</p>
                    </div>
                </div>
            </section>

            <div className="bottom-box">
                <section className="cta-section">
                    <h2>Treat Yourself Today</h2>
                    <p>Your relaxation is only one appointment away.</p>
                    <a href="/contact-us" className="cta-button">Book an Appointment</a>
                </section>
            </div>
        </div>
    );
}