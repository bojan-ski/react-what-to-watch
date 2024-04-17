const Navbar = () => {
    const active = window.location.pathname;

    return (
        <header className="text-white mb-3">
            <div className="container d-flex align-items-center justify-content-between">
                {/* logo */}
                <div className="logo">
                    <a className="navbar-brand text-uppercase" href="/">
                        What To Watch App
                    </a>
                </div>

                 {/* navbar links */}
                <nav className='navbar navbar-expand'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={active === '/movies' ? "nav-link active" : "nav-link"} href="movies">
                                Movies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={active === '/tv-shows' ? "nav-link active" : "nav-link"} href="tv-shows">
                                Tv Shows
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Navbar