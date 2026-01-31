import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Packages = () => {
    const [activeTab, setActiveTab] = useState(1); // Default to 'Plus' (index 1)

    const packages = [
        {
            name: "Go",
            price: "4,000",
            tagline: "For businesses that just need an online presence.",
            features: [
                { name: "3 Posts per week", included: true },
                { name: "Basic captions", included: true },
                { name: "Brand consistency", included: true },
                { name: "Page stays active", included: true }
            ],
            popular: false
        },
        {
            name: "Plus",
            price: "8,000",
            tagline: "For brands that want consistency and a professional look.",
            features: [
                { name: "5 Posts per week", included: true },
                { name: "Engaging captions with hooks", included: true },
                { name: "Hashtag optimization", included: true },
                { name: "Content calendar", included: true },
                { name: "Bio & highlights setup", included: true }
            ],
            popular: true
        },
        {
            name: "Premium",
            price: "16,000",
            tagline: "For businesses that want social media to bring clients.",
            features: [
                { name: "7 Posts per week", included: true },
                { name: "Content strategy", included: true },
                { name: "Target audience definition", included: true },
                { name: "Conversion-focused posts", included: true },
                { name: "Engagement support", included: true },
                { name: "Performance tracking", included: true },
                { name: "Priority support", included: true }
            ],
            popular: false
        }
    ];

    const activePackage = packages[activeTab];

    return (
        <div style={{ padding: 'var(--section-padding) 0 4rem' }}>
            <div className="container" style={{ maxWidth: '600px' }}> {/* Constrained width for mobile-app feel */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: 'var(--h1-size)', fontWeight: '800', marginBottom: '0.5rem' }}>Choose Your Plan</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        Flexible options for your growth.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div style={{
                    display: 'flex',
                    background: '#f1f5f9',
                    padding: '0.5rem',
                    borderRadius: '9999px',
                    marginBottom: '2rem',
                    position: 'relative',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                }}>
                    {packages.map((pkg, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                borderRadius: '9999px',
                                border: 'none',
                                background: activeTab === index ? 'white' : 'transparent',
                                color: activeTab === index ? 'var(--color-text)' : 'var(--color-text-light)',
                                fontWeight: activeTab === index ? '700' : '500',
                                boxShadow: activeTab === index ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            {pkg.name}
                        </button>
                    ))}
                </div>

                {/* Package Card */}
                <div className="glass-card" style={{
                    padding: '2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    borderColor: activePackage.popular ? 'var(--color-primary)' : 'var(--glass-border)',
                    borderWidth: activePackage.popular ? '2px' : '1px'
                }}>
                    {activePackage.popular && (
                        <div style={{
                            position: 'absolute',
                            top: '0.5rem',
                            right: '1rem',
                            background: 'var(--color-primary)',
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '2rem',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            textTransform: 'uppercase'
                        }}>
                            Most Popular
                        </div>
                    )}

                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-primary)' }}>
                            <span style={{ fontSize: '1.2rem', verticalAlign: 'top', opacity: 0.7, marginRight: '0.2rem' }}>Ksh</span>
                            {activePackage.price}
                            <span style={{ fontSize: '1rem', color: 'var(--color-text-light)', fontWeight: '500' }}>/mo</span>
                        </div>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                            {activePackage.tagline}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                        {activePackage.features
                            .filter(f => f.included) // Hide features not offered
                            .map((feature, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <CheckCircle size={14} color="var(--color-primary)" strokeWidth={3} />
                                    </div>
                                    <span style={{ fontSize: '1.05rem', fontWeight: '500', color: 'var(--color-text)' }}>
                                        {feature.name}
                                    </span>
                                </div>
                            ))}
                    </div>

                    <Link to="/register">
                        <Button variant={activePackage.popular ? "primary" : "outline"} style={{ width: '100%', padding: '1rem' }}>
                            Get {activePackage.name}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Packages;
