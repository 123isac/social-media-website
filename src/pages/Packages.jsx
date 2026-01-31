import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Packages = () => {
    const packages = [
        {
            name: "4k Package",
            price: "4,000",
            features: [
                { name: "Bot Integration", detail: "Runs twice a week", included: true },
                { name: "4 Posts per week", included: true },
                { name: "Basic Captions", included: true },
                { name: "Hashtag Strategy", included: true },
                { name: "Story Reposts", included: false },
                { name: "Monthly Report", included: false },
                { name: "Community Management", included: false }
            ],
            popular: false
        },
        {
            name: "8k Package",
            price: "8,000",
            features: [
                { name: "Bot Integration", detail: "Runs daily", included: true },
                { name: "5 Posts per week", included: true },
                { name: "Engaging Captions", included: true },
                { name: "Hashtag Strategy", included: true },
                { name: "Story Reposts", included: true },
                { name: "Monthly Report", included: true },
                { name: "Community Management", included: false }
            ],
            popular: true
        },
        {
            name: "16k Package",
            price: "16,000",
            features: [
                { name: "Bot Integration", detail: "Runs 24/7", included: true },
                { name: "Daily Posts (7/week)", included: true },
                { name: "Premium Captions", included: true },
                { name: "Advanced Hashtags", included: true },
                { name: "Daily Stories", included: true },
                { name: "Weekly Reports", included: true },
                { name: "Full Community Mgmt", included: true }
            ],
            popular: false
        }
    ];

    return (
        <div style={{ padding: 'var(--section-padding) 0 4rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: 'var(--h1-size)', fontWeight: '800', marginBottom: '1rem' }}>Choose Your Plan</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        Transparent pricing for every stage of growth.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    alignItems: 'start'
                }}>
                    {packages.map((pkg, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '0',
                            overflow: 'hidden',
                            position: 'relative',
                            border: pkg.popular ? '2px solid var(--color-primary)' : '1px solid var(--glass-border)'
                        }}>
                            {pkg.popular && (
                                <div style={{
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    textAlign: 'center',
                                    padding: '0.5rem',
                                    fontWeight: '700',
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Most Popular
                                </div>
                            )}

                            <div style={{ padding: '2rem 2rem 1rem', textAlign: 'center', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>{pkg.name}</h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>
                                    <span style={{ fontSize: '1rem', verticalAlign: 'top', opacity: 0.7 }}>Ksh</span>
                                    {pkg.price}
                                    <span style={{ fontSize: '1rem', opacity: 0.5, fontWeight: '500' }}>/mo</span>
                                </div>
                            </div>

                            <div style={{ padding: '1rem 0' }}>
                                {pkg.features.map((feature, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '0.75rem 2rem',
                                        background: i % 2 === 0 ? 'rgba(255,255,255,0.3)' : 'transparent',
                                        opacity: feature.included ? 1 : 0.6
                                    }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                                            <span style={{ fontWeight: '600', color: feature.included ? 'var(--color-text)' : 'var(--color-text-light)' }}>
                                                {feature.name}
                                            </span>
                                            {feature.detail && feature.included && (
                                                <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '600' }}>{feature.detail}</span>
                                            )}
                                        </div>
                                        <div>
                                            {feature.included ? (
                                                <CheckCircle size={20} color="var(--color-primary)" fill="rgba(59, 130, 246, 0.1)" />
                                            ) : (
                                                <span style={{ color: '#cbd5e1', fontSize: '1.2rem', fontWeight: 'bold' }}>—</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <Link to="/register">
                                    <Button variant={pkg.popular ? "primary" : "outline"} style={{ width: '100%' }}>
                                        Select {pkg.name}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Packages;
