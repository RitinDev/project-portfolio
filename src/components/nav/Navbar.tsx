import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;