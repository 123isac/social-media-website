import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, BarChart, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section style={{
                padding: '8rem 0 5rem',
                background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(59, 130, 246, 0.05) 100%)',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '2rem', color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem' }}>
                        Professional Social Media Management
                    </div>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        background: 'var(--gradient-main)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Helping Small Businesses Stay Active & Professional
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                        Daily posts, story updates, and engagement management — so you look serious online without lifting a finger.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/register">
                            <Button variant="primary">Get Started</Button>
                        </Link>
                        <Link to="/packages">
                            <Button variant="outline">View Packages</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section - Value Props */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Feature 1 */}
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--color-primary)' }}>
                                <Calendar size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>Daily Content</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>
                                Consistent Instagram & Facebook posts to keep your audience engaged and your brand top-of-mind.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--color-primary)' }}>
                                <MessageCircle size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>Engagement</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>
                                Quick responses to comments and messages so you never miss a lead or customer inquiry.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--color-primary)' }}>
                                <BarChart size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>Growth Ads</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>
                                Optional ad campaigns designed to reach new customers and accelerate your business growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Teaser */}
            <section className="section" style={{ background: 'var(--color-secondary)' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: '2rem',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Simple Packaging</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                            Choose the package that works for your business. No hidden fees, just results.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', background: 'white', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', width: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <CheckCircle size={24} color="var(--color-primary)" />
                                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>Organic Posting</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <CheckCircle size={24} color="var(--color-primary)" />
                                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>Ads Management</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <CheckCircle size={24} color="var(--color-primary)" />
                                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>Full Social Management</span>
                            </div>
                        </div>
                        <Link to="/packages">
                            <Button variant="primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                View All Packages <ArrowRight size={20} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Portfolio Preview */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Our Work</h2>
                        <p style={{ color: 'var(--color-text-light)' }}>Sample work showing professional layout & engagement style</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Gradient Placeholders for Portfolio Items */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                                <div style={{
                                    height: '300px',
                                    background: `linear-gradient(${135 + item * 45}deg, #e0e7ff 0%, #f3e8ff 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}>
                                    <span style={{ opacity: 0.3, fontWeight: '700', fontSize: '2rem', color: '#6366f1' }}>SAMPLE {item}</span>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <p style={{ fontWeight: '600', color: 'var(--color-text)' }}>Elegant Jewellery Brand</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Daily posts & Story engagement</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
