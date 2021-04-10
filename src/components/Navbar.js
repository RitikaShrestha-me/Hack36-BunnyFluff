const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className = "heading">
                <h1>N</h1>
                <h2>ew</h2>
                <h2>ormal</h2>
            </div>
            <div className="navbar-links">
                <a className="navbar-links-link" href="/">HOME</a><br/>
                <a className="navbar-links-link" href="/Intro">ABOUT</a><br/>
                <a className="navbar-links-link" href="/Instructions">INSTRUCTIONS</a><br/>
                <a className="navbar-links-link" href="/Contact">CONTACT US</a><br/>
            </div>    
        </nav>
    );
}
 
export default Navbar;