import "../Pages-CSS/ContactUs.css";

export default function ContactUs() {
    const phone = "(619) 825-7768";
    const addressLines = ["6963 Broadway", "Lemon Grove, CA 91945"];
    const socials = {
        instagram: "https://www.instagram.com/allurenails6963",
        facebook: "https://www.facebook.com/allurenails6963",
        tiktok: "https://www.tiktok.com/@allurenails6963",
        
    };

    return (
        <div className="contact-page">
            <header className="contact-hero">
                <h1 id="contact-us-text">Contact Us</h1>
                <p className="lead">Questions, bookings, or special requests — we'd love to hear from you.</p>
            </header>

            <main className="contact-main">
                <div className="contact-grid">
                    <div className="contact-card contact-info">
                        <h2>Get in touch</h2>
                        <p className="muted">Call to book an appointment or ask a question.</p>
                        <p className="phone"><a href={`tel:${phone.replace(/[^0-9]/g, "")}`}>{phone}</a></p>

                        <h3>Address</h3>
                        <address className="address">
                            {addressLines.map((l) => (
                                <div key={l}>{l}</div>
                            ))}
                        </address>

                        <h3>Follow us</h3>
                        <ul className="social-links">
                            <li><a href={socials.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a href={socials.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
                            <li><a href={socials.tiktok} target="_blank" rel="noreferrer">TikTok</a></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}
