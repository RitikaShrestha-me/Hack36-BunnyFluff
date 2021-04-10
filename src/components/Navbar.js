const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>BunnyFluff</h2>
            <div className="navbar-links">
                <a className="navbar-links-link" href="/">HOME</a><br/>
                <a className="navbar-links-link" href="/Instructions">INSTRUCTIONS</a><br/>
                <a className="navbar-links-link" href="/Contact">CONTACT US</a><br/>
            </div>    
        </nav>
    );
}
 
export default Navbar;