import "../Pages-CSS/Services.css";
import { useState } from "react";

type Category = {
  title: string;
  items: string[];
};

const CATEGORIES: Category[] = [
  {
    title: "Pedicures",
    items: [
      "Pedicare Classic",
      "Pedicure Paraffin / Callus",
      "Pedicure Princess",
      "Pedicure Massage Lover",
      "Pedicure Mango / Coffee / Pineapple",
      "Pedicure Rose / Lavender",
      "Pedicure Mojito-Cucumber / Peppermint",
      "Pedicure Fresh Orange",
      "Pedicure Spoil Me",
    ],
  },
  {
    title: "Manicures",
    items: [
      "Classic Manicure",
      "Shellac / Gel Manicure",
      "Paraffin Manicure",
      "Rose / Citrus Manicure",
      "French GEL Polish Change",
      "Manicure & Pedicure Combo",
    ],
  },
  {
    title: "Enhancements & Full Sets",
    items: [
      "Full Set Acrylic / Overlay",
      "Full Set Gel / Shellac",
      "Dipping / Glitter / Color Powder w/ Gel Top",
      "Ombre / Marble Fullset",
      "Full Set Solar Pink White",
      "White / Pearl Tip Full Set (with gel top)",
    ],
  },
  {
    title: "Refills & Maintenance",
    items: [
      "Gel Refill",
      "Refill Acrylic (polish)",
      "Refill Powder / Ombre (one color)",
      "Refill Same Powder Color / Glitter Dip",
      "Refill Pink and White Solar",
      "Refill Solar Pink w/ Gel Top",
    ],
  },
  {
    title: "Nail Art & Add-Ons",
    items: [
      "Design with Big Diamond / 3D",
      "Chrome Powder / V-Shape Design",
      "Gel Cat Eye Color Change",
      "Add French / Matte / Chrome / Cat Eye / Glow Dark Gel",
      "Add Gel / Shellac / French",
      "French / Design / Add Gel Top / Take Off (combined services)",
    ],
  },
  {
    title: "Treatments & Extras",
    items: [
      "Callus Remover / Sugar Scrub / Mask",
      "Acrylic or Gel Takeoff (no repeat service)",
      "Paraffin / Holographic Powder",
      "Nail Repair / Extra Long options",
      "Color Change (hands & feet)",
    ],
  },
  {
    title: "Waxing & Body",
    items: [
      "Eyebrow Wax",
      "Eyebrows & Lip",
      "Eyebrows & Chin",
      "Upper Lips",
      "Chin",
      "Underarms",
      "Full Face",
      "Full Chest",
      "Full Back",
      "Half Arm",
      "Full Arm",
      "Half Leg",
      "Full Leg",
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  function toggle(title: string) {
    setOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  }

  return (
    <div className="services-page">
      <header className="services-hero">
        <h1 id="welcome-text">Our Services</h1>
      </header>

      <section className="services-intro boxed-section">
        <h2>Feel Pretty, Feel Pampered</h2>
        <p>
          We offer a wide range of nail and beauty services tailored to your
          style. Browse the categories below and tap a service to learn more.
        </p>
      </section>

      <section className="services-catalog">
        <div className="category-grid boxed-section">
          {CATEGORIES.map((cat) => {
            const id = cat.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            const isOpen = !!open[cat.title];
            return (
              <div className="category-card" key={cat.title}>
                <button
                  className={`category-header ${isOpen ? "open" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-list`}
                  onClick={() => toggle(cat.title)}
                >
                  <span className="category-title">{cat.title}</span>
                  <span className="chevron" aria-hidden="true">{isOpen ? '▴' : '▾'}</span>
                </button>

                <div
                  id={`${id}-list`}
                  className={`category-list-wrap ${isOpen ? "open" : "closed"}`}
                >
                  <ul className="category-list">
                    {cat.items.map((it, idx) => (
                      <li className="category-item" key={it}>
                        <span className="item-index">{idx + 1}.</span>
                        <span className="item-text">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
