import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'white', borderTop: '1px solid #e2e8f0', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>

                    {/* Brand */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                            SocialBoost
                        </h3>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                            Helping small businesses stay active, professional, and engaging on social media.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'var(--color-primary)' }}><Instagram /></a>
                            <a href="#" style={{ color: 'var(--color-primary)' }}><Facebook /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/packages" style={{ color: 'var(--color-text-light)' }}>Packages</Link></li>
                            <li><Link to="/portfolio" style={{ color: 'var(--color-text-light)' }}>Portfolio</Link></li>
                            <li><Link to="/contact" style={{ color: 'var(--color-text-light)' }}>Contact</Link></li>
                            <li><Link to="/register" style={{ color: 'var(--color-text-light)' }}>Register</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--color-text-light)' }}>
                                <Mail size={18} />
                                <span>hello@socialboost.com</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--color-text-light)' }}>
                                <Phone size={18} />
                                <span>+254 700 000 000</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} SocialBoost. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
