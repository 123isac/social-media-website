import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import { Send, CheckCircle } from 'lucide-react';

const Register = () => {
    const location = useLocation();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        packageType: 'Organic Posting',
        notes: ''
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pkg = params.get('package');
        if (pkg) {
            setFormData(prev => ({ ...prev, packageType: pkg }));
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log('Form submitted:', formData);
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div style={{ padding: '8rem 0', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container glass-card" style={{ maxWidth: '600px', padding: '4rem', textAlign: 'center' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'rgba(34, 197, 94, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 2rem',
                        color: '#22c55e'
                    }}>
                        <CheckCircle size={48} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Thank You!</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                        We have received your details. We'll contact you within 24 hours via WhatsApp or Email to get started.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">Back to Home</Button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ padding: '8rem 0 5rem' }}>
            <div className="container">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Get Started</h1>
                        <p style={{ color: 'var(--color-text-light)' }}>Complete the form below to register your account.</p>
                    </div>

                    <form className="glass-card" style={{ padding: '3rem' }} onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            {/* Full Name */}
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        borderRadius: 'var(--radius)',
                                        border: '1px solid #e2e8f0',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Business Name */}
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Business Name</label>
                                <input
                                    type="text"
                                    name="businessName"
                                    required
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        borderRadius: 'var(--radius)',
                                        border: '1px solid #e2e8f0',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="Doe's Bakery"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        borderRadius: 'var(--radius)',
                                        border: '1px solid #e2e8f0',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone / WhatsApp</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        borderRadius: 'var(--radius)',
                                        border: '1px solid #e2e8f0',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="+254 731 785 795"
                                />
                            </div>

                            {/* Package Selection */}
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Select Package</label>
                                <div style={{ position: 'relative' }}>
                                    <select
                                        name="packageType"
                                        value={formData.packageType}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            borderRadius: 'var(--radius)',
                                            border: '1px solid #e2e8f0',
                                            fontFamily: 'inherit',
                                            fontSize: '1rem',
                                            appearance: 'none',
                                            backgroundColor: 'white'
                                        }}
                                    >
                                        <option value="Organic Posting">Organic Posting (4,000 KSh)</option>
                                        <option value="Organic + Ads">Organic + Ads (8,000 KSh)</option>
                                        <option value="Full Social">Full Social (16,000 KSh)</option>
                                    </select>
                                    <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                        ▼
                                    </div>
                                </div>
                            </div>

                            {/* Notes */}
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Additional Notes (Optional)</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows="3"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        borderRadius: 'var(--radius)',
                                        border: '1px solid #e2e8f0',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem',
                                        resize: 'vertical'
                                    }}
                                    placeholder="Any specific goals or questions?"
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                Create Account <Send size={18} />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
