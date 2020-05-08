import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Google Book Search</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/"><button type="button" className="btn text-white">Search Books</button></a>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn text-white">Saved Books</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;