import './Navbar.css';

type NavbarProps = {
    baseURL: string;
    appPaths: {
        home: string;
        projects: string;
        contact: string;
    };
};

const Navbar = (props: NavbarProps) => {
    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/project-portfolio/#/projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;