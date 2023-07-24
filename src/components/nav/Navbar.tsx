import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

type PathList = Record<string, string>;

const appPaths: PathList = {
    Home: '/',
    Projects: '/projects',
    Contact: '/contact',
};

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <ul className="navbar__links">
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
            </ul>
        </nav>
    );
};

export default Navbar;
