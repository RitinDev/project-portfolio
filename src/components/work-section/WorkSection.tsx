import './WorkSection.css'

import { Card, Row, Col } from 'antd';
import { useState } from 'react';

import norseLogo from '../../assets/images/work-ex/norse-logo.png';
import citiesLogo from '../../assets/images/work-ex/cities-logo.png';
import nyuadLogo from '../../assets/images/work-ex/nyuad-logo.png';
import amaxaLogo from '../../assets/images/work-ex/amaxa-logo.png';

type WorkItem = {
    title: string;
    company: string;
    duration: string;
    location: string;
    employmentType: string;
    logo: string;
    skills: string[];
};

const workHistory: WorkItem[] = [
    {
        title: 'Junior Data Analyst',
        company: 'Norse Atlantic Airways',
        duration: 'Jul 2024 - Present',
        location: 'Arendal, Norway',
        employmentType: 'Full-time',
        logo: norseLogo,
        skills: ['Python', 'SQL', 'Power BI', 'Navitaire', 'AirRM'],
    },
    {
        title: 'Software Engineer',
        company: 'CITIES Center for Urban Interacting Networks',
        duration: 'Apr 2023 - Jul 2024',
        location: 'Abu Dhabi, UAE',
        employmentType: 'Internship',
        logo: citiesLogo,
        skills: ['React', 'MUI', 'Node.js', 'YAML'],
    },
    {
        title: 'UNIX Lab Peer Tutor',
        company: 'NYU Abu Dhabi',
        duration: 'Sep 2023 - May 2024',
        location: 'Abu Dhabi, UAE',
        employmentType: 'Internship',
        logo: nyuadLogo,
        skills: ['Peer Mentoring', 'Web Development', 'Data Structures', 'Algorithms'],
    },
    {
        title: 'Web Developer',
        company: 'ámaxa',
        duration: 'Feb 2023 - May 2023',
        location: 'Remote',
        employmentType: 'Internship',
        logo: amaxaLogo,
        skills: ['Python', 'JavaScript', 'TailwindCSS', 'Node.js'],
    },
];

const ArrowButton = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
    <Col
        flex="24px"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <span
            style={{
                cursor: 'pointer',
                fontSize: '1.4rem',
                fontWeight: 500,
                padding: '0.25rem 0.5rem',
                color: '#666',
                userSelect: 'none',
                transition: 'all 0.2s ease',
            }}
            onClick={onClick}
            onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.6';
                e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1)';
            }}
        >
            {direction === 'left' ? '‹' : '›'}
        </span>
    </Col>
);

const WorkSection = () => {
    const [index, setIndex] = useState(0);
    const job = workHistory[index];

    const prev = () => setIndex((prev) => (prev === 0 ? workHistory.length - 1 : prev - 1));
    const next = () => setIndex((prev) => (prev === workHistory.length - 1 ? 0 : prev + 1));

    return (
        <section id="work" style={{ padding: '0 0 1.5rem 0', maxWidth: 600, margin: '0 auto' }}>
            <Row align="middle" style={{ height: '140px', marginTop: '0.5rem', flexWrap: 'nowrap' }}>
                <ArrowButton direction="left" onClick={prev} />

                <Col flex="auto">
                    <Card
                        key={job.title}
                        bordered
                        style={{
                            background: '#fff',
                            color: '#000',
                            border: 'none',
                            borderRadius: 0,
                            padding: 0,
                            height: '100%',
                        }}
                        bodyStyle={{ padding: 0, height: '100%' }}
                    >
                        <Row
                            style={{
                                height: '100%',
                                flexWrap: 'nowrap',
                                alignItems: 'stretch',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            }}
                        >
                            <Col
                                style={{
                                    flex: '0 0 25%',
                                    maxWidth: '25%',
                                    padding: '0.5rem 0.5rem',
                                }}
                            >
                                <div
                                    style={{
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        src={job.logo}
                                        alt={`${job.company} logo`}
                                        style={{
                                            maxHeight: '100%',
                                            width: '100%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </div>
                            </Col>

                            <Col
                                style={{
                                    flex: '1',
                                    padding: '0.5rem 0.75rem 0.5rem 0.25rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly',
                                    textAlign: 'left',
                                }}
                            >
                                <div className="text-block">
                                    <h3 style={{ margin: 0, fontSize: '1rem', lineHeight: '1.2' }}>{job.title}</h3>
                                    <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem' }}>{job.company}</p>
                                    <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.75rem', color: 'gray' }}>
                                        {job.duration} · {job.location} · {job.employmentType}
                                    </p>
                                </div>

                                <div className="skills-row">
                                    {job.skills.map((skill, idx) => (
                                        <span key={skill} style={{ fontSize: '0.75rem', color: '#888' }}>
                                            {skill}
                                            {idx !== job.skills.length - 1 ? ' · ' : ''}
                                        </span>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <ArrowButton direction="right" onClick={next} />
            </Row>
        </section>
    );
};

export default WorkSection;