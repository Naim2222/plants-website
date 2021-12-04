import React from 'react'
import './Header.css'
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Greenify</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link mx-3 active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#plants">Plants</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#testimonial">Testimonial</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
