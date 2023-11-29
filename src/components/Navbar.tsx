const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                Ascend
            </a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/map">Map</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar