import { NavLink } from "react-router-dom";

const Navbar = () => {
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
                            <NavLink to='/movies' className='nav-link'>
                                Movies
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/tv-shows' className='nav-link'>
                                TV Shows
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Navbar