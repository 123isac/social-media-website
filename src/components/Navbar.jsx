import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Packages', path: '/packages' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '80px'
                }}>
                    {/* Logo */}
                    <Link to="/" style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        fontFamily: "'Outfit', sans-serif",
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--color-primary)'
                    }}>
                        <Instagram size={28} />
                        <span>SocialBoost</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
                        <style>{`
              @media (min-width: 768px) {
                .desktop-nav { display: flex !important; }
                .mobile-menu-btn { display: none !important; }
              }
            `}</style>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    fontWeight: '500',
                                    color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text-light)',
                                    position: 'relative'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/register" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ color: 'var(--color-text)' }}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    padding: '2rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    borderTop: '1px solid #f1f5f9'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text)',
                                textAlign: 'center'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/register"
                        onClick={() => setIsOpen(false)}
                        className="btn-primary"
                        style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
