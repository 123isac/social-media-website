import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Button from '../components/Button';

const Packages = () => {
    const packages = [
        {
            name: 'Organic Posting',
            price: '4,000 KSh',
            period: '/ month',
            features: [
                '1 Post per day',
                '3-5 Stories per week',
                'Reply to messages & comments',
                'Basic hashtag strategy'
            ],
            recommended: false
        },
        {
            name: 'Organic + Ads',
            price: '8,000 KSh',
            period: '/ month',
            features: [
                'Everything in Organic',
                'Ad creation & management',
                'Audience targeting',
                'Monthly performance report'
            ],
            recommended: true
        },
        {
            name: 'Full Social',
            price: '16,000 KSh',
            period: '/ month',
            features: [
                'Everything in Organic + Ads',
                'Facebook & WhatsApp posting',
                'Content calendar creation',
                'Priority support',
                'Competitor analysis'
            ],
            recommended: false
        }
    ];

    return (
        <div style={{ padding: 'var(--section-padding) 0 4rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: 'var(--h1-size)', fontWeight: '800', marginBottom: '1rem' }}>Simple, Transparent Pricing</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        Choose the package that fits your business needs. No long-term contracts.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', /* Reduced from 280px */
                    gap: '1.5rem', /* Reduced gap */
                    alignItems: 'start'
                }}>
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            style={{
                                padding: '2.5rem',
                                position: 'relative',
                                border: pkg.recommended ? '2px solid var(--color-primary)' : '1px solid var(--glass-border)',
                                transform: pkg.recommended ? 'scale(1.05)' : 'none',
                                zIndex: pkg.recommended ? 10 : 1
                            }}
                        >
                            {pkg.recommended && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    padding: '0.25rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                    letterSpacing: '0.05em'
                                }}>
                                    MOST POPULAR
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{pkg.name}</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '2rem' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-text)' }}>{pkg.price}</span>
                                <span style={{ color: 'var(--color-text-light)', marginLeft: '0.5rem' }}>{pkg.period}</span>
                            </div>

                            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {pkg.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '4px', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                            <Check size={14} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link to={`/register?package=${encodeURIComponent(pkg.name)}`} style={{ display: 'block' }}>
                                <Button
                                    variant={pkg.recommended ? 'primary' : 'outline'}
                                    style={{ width: '100%' }}
                                >
                                    Choose {pkg.name}
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Packages;
