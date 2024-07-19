import React from "react";


const Header = () => {
    return (
        <header id="header" role="banner">
            <nav className="navbar">
                <div className="container desktop_container">
                    <div className="content">
                        <div className="header-logo">
                            <a href="/">
                            <span className="visually-hidden"></span>
                            <span>namu</span>
                            </a>
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-menu-left">
                                <div className="navbar-item">
                                    <a href=" " className="navbar-item"><span>Development</span></a>
                                </div>
                                <div className="navbar-item">
                                    <a href=" " className="navbar-item"><span>Resume</span></a>
                                </div>
                                <div className="navbar-item">
                                    <a href=" " className="navbar-item"><span>Tags</span></a>
                                </div>
                                <div className="navbar-item">
                                    <a href=" " className="navbar-item"><span>Books</span></a>
                                </div>
                            </div>
                            <div className="navbar-menu-right">
                                <div className="search-bar">
                                    <label className="visually-hidden" htmlFor="searchbar-input">통합검색</label>
                                    <input type="text" id="searchbar-input" className="input" placeholder="Type something"></input>
                                    <span className="search__icon"><i className="far fa-search"></i></span>
                                </div>
                                <div className="navbar-item buttons">
                                    <button type="button" id="dark-mode" className="nav-btn no-hover">
                                        <span className="sr-only">Dark Mode</span>
                                        <span className="icon-brightness"></span>
                                    </button>
                                    <button type="button" className="sign-in">로그인</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
