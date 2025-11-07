import React, { useState } from "react";

const styles = {
    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.5rem 1rem",
        background: "#0f172a",
        color: "#fff",
        gap: "1rem",
    },
    brand: {
        fontWeight: 700,
        fontSize: "1.1rem",
    },
    links: {
        display: "flex",
        gap: "1rem",
        listStyle: "none",
        margin: 0,
        padding: 0,
        alignItems: "center",
    },
    link: {
        color: "inherit",
        textDecoration: "none",
        padding: "0.35rem 0.6rem",
        borderRadius: 4,
    },
    linkHover: {
        background: "rgba(255,255,255,0.06)",
    },
    hamburger: {
        display: "none",
        background: "transparent",
        border: "none",
        color: "inherit",
        fontSize: "1.2rem",
        cursor: "pointer",
    },
    // responsive
    mobileMenu: {
        display: "none",
        flexDirection: "column",
        gap: "0.5rem",
        marginTop: "0.5rem",
    },
    "@media": {
        small: {
            hamburger: { display: "block" },
            links: { display: "none" },
            mobileMenu: { display: "flex" },
        },
    },
};

/**
 * Simple responsive navbar component.
 * - Brand on the left
 * - Links on the right (collapses into a hamburger on small screens)
 */
export default function NavBar() {
    const [open, setOpen] = useState(false);

    // Simple inline style helper for hover-like effect on focus/active states
    const linkStyle = (overrides = {}) => ({ ...styles.link, ...overrides });

    return (
        <header>
            <nav style={styles.nav} aria-label="Main navigation">
                <div style={styles.brand}>MyShop</div>

                {/* Desktop links */}
                <ul style={styles.links} className="nav-links">
                    <li>
                        <a href="#" style={linkStyle()}>Home</a>
                    </li>
                    <li>
                        <a href="#" style={linkStyle()}>Products</a>
                    </li>
                    <li>
                        <a href="#" style={linkStyle()}>About</a>
                    </li>
                    <li>
                        <a href="#" style={linkStyle()}>Contact</a>
                    </li>
                </ul>

                {/* Hamburger for small screens */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label={open ? "Close menu" : "Open menu"}
                    style={styles.hamburger}
                    className="nav-hamburger"
                >
                    {open ? "✕" : "☰"}
                </button>
            </nav>

            {/* Mobile menu (simple, controlled by state) */}
            {open && (
                <div style={styles.mobileMenu} className="nav-mobile">
                    <a href="#" style={linkStyle()}>Home</a>
                    <a href="#" style={linkStyle()}>Products</a>
                    <a href="#" style={linkStyle()}>About</a>
                    <a href="#" style={linkStyle()}>Contact</a>
                </div>
            )}
        </header>
    );
}