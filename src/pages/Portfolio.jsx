import React from 'react';
import Button from '../components/Button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            client: "Bloom & Grow",
            category: "Floral Shop",
            description: "Increased engagement by 200% with daily aesthetic posts and story polls.",
            color1: "#fbcfe8",
            color2: "#f472b6",
            image: "/sample-jewellery.png" // Reusing elegant style for now
        },
        {
            id: 2,
            client: "Urban Coffee",
            category: "Cafe & Bakery",
            description: "Showcased new menu items leading to a 30% increase in weekend foot traffic.",
            color1: "#d6d3d1",
            color2: "#78716c",
            image: "/sample-cafe.png"
        },
        {
            id: 3,
            client: "TechSolve",
            category: "IT Support",
            description: "Professional LinkedIn and Facebook management establishing B2B authority.",
            color1: "#bfdbfe",
            color2: "#3b82f6"
        },
        {
            id: 4,
            client: "FitLife Gym",
            category: "Health & Fitness",
            description: "High-energy video reels and motivational quotes for community building.",
            color1: "#bbf7d0",
            color2: "#22c55e"
        },
        {
            id: 5,
            client: "Luxe Interiors",
            category: "Home Decor",
            description: "Curated Pinterest-style feed layout for premium brand positioning.",
            color1: "#e9d5ff",
            color2: "#a855f7"
        },
        {
            id: 6,
            client: "City Real Estate",
            category: "Real Estate",
            description: "Property showcase carousels and lead generation ads.",
            color1: "#fed7aa",
            color2: "#f97316",
            image: "/sample-real-estate.png"
        }
    ];

    return (
        <div style={{ padding: '8rem 0 5rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Our Work</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        We help brands across various industries look their best online. Check out some of our recent management projects.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project) => (
                        <div key={project.id} className="glass-card" style={{ overflow: 'hidden', transition: 'transform 0.3s ease' }}>
                            <div style={{
                                height: '240px',
                                background: `linear-gradient(135deg, ${project.color1} 0%, ${project.color2} 100%)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                                {/* Mock Visual Content */}
                                <div style={{
                                    width: '80%',
                                    height: '60%',
                                    background: 'rgba(255,255,255,0.3)',
                                    backdropFilter: 'blur(4px)',
                                    borderRadius: 'var(--radius)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <span style={{ fontWeight: '700', color: 'white', fontSize: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                        {project.client}
                                    </span>
                                </div>
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                                    {project.category}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{project.client}</h3>
                                <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>{project.description}</p>
                                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--color-text)' }}>
                                    View Profile <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '5rem', padding: '4rem', background: 'var(--color-secondary)', borderRadius: 'var(--radius)' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Ready to See Your Brand Here?</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>Join hundreds of other businesses growing with SocialBoost.</p>
                    <Link to="/register">
                        <Button variant="primary">Start Your Journey</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
