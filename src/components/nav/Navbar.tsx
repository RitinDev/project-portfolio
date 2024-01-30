import { Link, useLocation } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
import './Navbar.css';

// Internal navigation paths
type PathList = Record<string, string>;
const appPaths: PathList = {
    Home: '/',
    Projects: '/projects',
    Contact: '/contact',
    Resume: '/ritin-malhotra-resume.pdf',
};

// External links
const resumeUrl = '/project-portfolio/ritin-malhotra-resume.pdf';
const githubProfileUrl = 'https://github.com/RitinDev';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar__wrapper">
            <h1 className="navbar__heading">Ritin Malhotra</h1>
            <nav className="navbar">
                <ul className="navbar__links">
                    {/* Display internal links */}
                    {Object.entries(appPaths).map(([name, path]) => (
                        <li key={name}>
                            <Link
                                to={path}
                                className={
                                    location.pathname === path
                                        ? 'navbar__link navbar__link--active'
                                        : 'navbar__link'
                                }
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href={resumeUrl}
                            className="navbar__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            href={githubProfileUrl}
                            className="navbar__link github__logo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubOutlined />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
