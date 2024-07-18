import React from "react";

const Header = () => {
    return (
        <header id="header" role="banner">
            <nav className="navbar">
                <div className="desktop_container">
                    <div className="content">
                        <div className="header_logo">
                            <a href="/">namu<span style={{ width: '110px', display: 'inline-block' }}></span></a>
                        </div>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-menu-left">
                            <div className="development">
                                <a href=" " className="navbar-menu-left-item"><span>Development</span></a>
                            </div>
                            <div className="resume">
                                <a href=" " className="navbar-menu-left-item"><span>Resume</span></a>
                            </div>
                            <div className="tags">
                                <a href=" " className="navbar-menu-left-item"><span>Tags</span></a>
                            </div>
                            <div className="books">
                                <a href=" " className="navbar-menu-left-item"><span>Books</span></a>
                            </div>
                        </div>
                        <div className="navbar-menu-rigth">
                            <div className="search-bar">
                                <label className="visually-hidden" for="searchbar-input">통합검색</label>
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
            </nav>
        </header>
    );
};

export default Header;
