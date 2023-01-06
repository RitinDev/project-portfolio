import './Navbar.css';

const BASE_URL: string = '/project-portfolio/#'

type pathList = {
    home: string
    projects: string
    contact: string
}

const appPaths: pathList = {
    home: `${BASE_URL}/`,
    projects: `${BASE_URL}/projects`,
    contact: `${BASE_URL}/contact`,
}

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <li>
                    <a href={appPaths.home}>Home</a>
                </li>
                <li>
                    <a href={appPaths.projects}>Projects</a>
                </li>
                <li>
                    <a href={appPaths.contact}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;