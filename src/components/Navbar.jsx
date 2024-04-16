const Navbar = () => {
    return (
        <header>
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <a className="navbar-brand" href="#">
                        What To Watch App
                    </a>
                </div>
                <nav className='navbar navbar-expand'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="movies">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="tv-shows">Tv Shows</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Navbar