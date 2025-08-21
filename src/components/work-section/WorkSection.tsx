import './WorkSection.css';

import { Card, Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { UpOutlined, DownOutlined } from '@ant-design/icons';

import norseLogo from '../../assets/images/work-ex/norse-logo.png';
import citiesLogo from '../../assets/images/work-ex/cities-logo.png';
import nyuadLogo from '../../assets/images/work-ex/nyuad-logo.png';
import amaxaLogo from '../../assets/images/work-ex/amaxa-logo.png';

const workHistory = [
    {
        title: 'Business and Data Analyst',
        company: 'Norse Atlantic Airways',
        duration: 'Jul 2025 - Present',
        location: 'Arendal, Norway',
        employmentType: 'Full-time',
        logo: norseLogo,
        skills: ['Python', 'SQL', 'Power BI', 'Navitaire', 'AirRM'],
    },
    {
        title: 'Junior Data Analyst',
        company: 'Norse Atlantic Airways',
        duration: 'Jul 2024 - Jul 2025',
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

const groupByCompany = (items) => {
    const map = new Map();
    for (const item of items) {
        if (!map.has(item.company)) map.set(item.company, []);
        map.get(item.company).push(item);
    }
    return Array.from(map.entries());
};

const groupedWorkHistory = groupByCompany(workHistory);

const ArrowButton = ({ direction, onClick }) => (
    <Col flex="24px" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
    const [roleIndex, setRoleIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

    const [company, roles] = groupedWorkHistory[index];
    const currentRole = roles[roleIndex];
    const hasMultipleRoles = roles.length > 1;
    const isFirst = roleIndex === 0;
    const isLast = roleIndex === roles.length - 1;

    const rotateRole = (forward = true) => {
        setAnimate(true);
        setTimeout(() => {
            setRoleIndex((prev) => (forward ? (prev + 1) % roles.length : (prev - 1 + roles.length) % roles.length));
            setAnimate(false);
        }, 200);
    };

    const handleCompanyChange = (newIndex: number) => {
        setIndex(newIndex);
        setRoleIndex(0); // reset roleIndex immediately
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleCompanyChange((index + 1) % groupedWorkHistory.length),
        onSwipedRight: () => handleCompanyChange((index - 1 + groupedWorkHistory.length) % groupedWorkHistory.length),
        onSwipedUp: () => hasMultipleRoles && rotateRole(true),
        onSwipedDown: () => hasMultipleRoles && rotateRole(false),
        preventScrollOnSwipe: true,
    });

    return (
        <section id="work" style={{ padding: '0 0 1.5rem 0', maxWidth: 600, margin: '0 auto' }}>
            <Row align="middle" style={{ marginTop: '0.5rem', flexWrap: 'nowrap' }}>
                <ArrowButton direction="left" onClick={() => handleCompanyChange(index === 0 ? groupedWorkHistory.length - 1 : index - 1)} />
                <Col flex="auto" {...handlers} onClick={() => !isMobile && hasMultipleRoles && rotateRole(true)}>
                    <Card bordered style={{ background: '#fff', border: 'none', borderRadius: 0 }} bodyStyle={{ padding: 0 }}>
                        <Row style={{ flexWrap: 'nowrap', alignItems: 'stretch', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                            <Col style={{ flex: '0 0 25%', maxWidth: '25%', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                <img src={currentRole.logo} alt={`${currentRole.company} logo`} style={{ maxHeight: '100%', width: '100%', objectFit: 'contain' }} />
                            </Col>
                            <Col
                                className='word-card-text-content'
                                style={{
                                    flex: 1,
                                    padding: '0.8rem 0.5rem 0.8rem 0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    textAlign: 'left',
                                    opacity: animate ? 0 : 1,
                                    transition: 'opacity 0.1s ease-out',
                                    position: 'relative',
                                }}
                            >
                                <div style={{ position: 'relative', paddingLeft: hasMultipleRoles ? '1.5rem' : 0 }}>
                                    {hasMultipleRoles && (
                                        <>
                                            {!isFirst && (
                                                <div className="ladder-line short-top" style={{ position: 'absolute', left: 8 }} />
                                            )}
                                            <div
                                                className={isFirst ? 'concentric-circle blue' : 'concentric-circle'}
                                                style={isFirst ? { position: 'absolute', left: 1, top: 4 } : { position: 'absolute', left: 1, top: 5 }}
                                            />
                                            {!isLast && (
                                                <div className="ladder-line" style={{ position: 'absolute', left: 8, bottom: -10, top: 20, width: 2, backgroundColor: '#d9d9d9' }} />
                                            )}
                                        </>
                                    )}
                                    <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, lineHeight: '1.35rem' }}>{currentRole.title}</h3>
                                    <p style={{ margin: 0, fontSize: '0.85rem' }}>{currentRole.company}</p>
                                    <p style={{ margin: 0, fontSize: '0.75rem', color: 'gray' }}>
                                        {currentRole.duration} · {currentRole.location} · {currentRole.employmentType}
                                    </p>
                                    <div className="skills-row" style={{ marginTop: '1.25rem' }}>
                                        {currentRole.skills.map((skill, idx) => (
                                            <span key={skill} style={{ fontSize: '0.75rem', color: '#888' }}>
                                                {skill}
                                                {idx !== currentRole.skills.length - 1 ? ' · ' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            {hasMultipleRoles && (
                                <Col
                                    style={{
                                        width: 50,
                                        paddingRight: '0.5em',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            padding: '1rem 0.5rem',
                                            borderRadius: '1rem',
                                            background: 'rgba(0, 0, 0, 0.04)',
                                            fontSize: '0.75rem',
                                            color: '#444',
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {!isFirst && <UpOutlined style={{ fontSize: '0.65rem', marginBottom: '0.1rem' }} />}
                                        {isFirst && <div style={{ fontSize: '0.55rem', marginBottom: '0.2rem' }}>{isMobile ? 'swipe' : 'click'}</div>}
                                        <div style={{ fontWeight: 500 }}>{roleIndex + 1}/{roles.length}</div>
                                        {isLast
                                            ? <div style={{ fontSize: '0.55rem', marginTop: '0.2rem' }}>{isMobile ? 'swipe' : 'click'}</div>
                                            : <DownOutlined style={{ fontSize: '0.65rem', marginTop: '0.2rem' }} />
                                        }
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </Card>
                </Col>
                <ArrowButton direction="right" onClick={() => handleCompanyChange((index + 1) % groupedWorkHistory.length)} />
            </Row>
        </section>
    );
};

export default WorkSection;
