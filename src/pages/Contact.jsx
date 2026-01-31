import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => setSubmitted(true))
            .catch(error => alert(error));
    };

    return (
        <div style={{ padding: '8rem 0 5rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Get in Touch</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {/* Contact Info */}
                    <div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem' }}>Contact Information</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--color-primary)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Chat with us</h3>
                                    <p style={{ color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Our friendly team is here to help.</p>
                                    <a href="#" className="text-gradient" style={{ fontWeight: '600' }}>Start a WhatsApp Chat</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--color-primary)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Email us</h3>
                                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Drop us a line anytime.</p>
                                        <a href="mailto:smartsocial254@gmail.com" style={{ color: 'var(--color-text)', fontWeight: '600' }}>smartsocial254@gmail.com</a>
                                    </div>                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--color-primary)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Call us</h3>
                                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Mon-Fri from 8am to 5pm.</p>
                                        <a href="tel:+254731785795" style={{ color: 'var(--color-text)', fontWeight: '600' }}>+254 731 785 795</a>
                                    </div>                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--color-primary)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Visit us</h3>
                                    <p style={{ color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Come say hello at our office.</p>
                                    <p style={{ color: 'var(--color-text)', fontWeight: '600' }}>123 Business Avenue, Nairobi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        className="glass-card"
                        style={{ padding: '3rem' }}
                        onSubmit={handleSubmit}
                        name="contact"
                        data-netlify="true"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#22c55e' }}>Message Sent!</h3>
                                <p style={{ color: 'var(--color-text-light)' }}>We'll get back to you shortly.</p>
                                <Button onClick={() => setSubmitted(false)} variant="outline" style={{ marginTop: '1.5rem' }}>Send Another</Button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your name"
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius)', border: '1px solid #e2e8f0', fontFamily: 'inherit' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="you@company.com"
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius)', border: '1px solid #e2e8f0', fontFamily: 'inherit' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        placeholder="How can we help?"
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius)', border: '1px solid #e2e8f0', fontFamily: 'inherit', resize: 'vertical' }}
                                    ></textarea>
                                </div>
                                <Button type="submit" variant="primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    Send Message <Send size={18} />
                                </Button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
