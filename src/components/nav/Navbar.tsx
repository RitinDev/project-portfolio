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
                    <a href={props.appPaths.home}>Home</a>
                </li>
                <li>
                    <a href={props.appPaths.projects}>Projects</a>
                </li>
                <li>
                    <a href={props.appPaths.contact}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;