import React, { useState } from 'react';
import './header.css';
import logo from "/src/assets/header/logo.png";
import { Link } from 'react-router-dom';
import icon from "/src/assets/header/icons8-search-100.png";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchBarActive, setIsSearchBarActive] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSearchBar = () => {
        setIsSearchBarActive(!isSearchBarActive);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <header>
            <div className='head'>
                <div className='headerimg'>
                    <Link to="/home"><img src={logo} alt="Logo" /></Link>
                </div>

                <div></div>
                
                <div className='balance'>
                    <div className='search-container'>
                        <div className='search-icon' onClick={toggleSearchBar}>
                            <img src={icon} alt="Search Icon" />
                        </div>
                        <input
                            type='text'
                            className={`search-bar ${isSearchBarActive ? 'active' : ''}`}
                            placeholder='Search...'
                        />
                    </div>
                    <div className='rules'><h6>Rules</h6></div>
                    <div className='balanceexpire'>
                        <h6>Balance: 1500</h6>
                        <h6>Exp: 0</h6>
                    </div>

                    <div className='dropdown'>
                        <h6 onClick={toggleDropdown} className='dropdown-toggle'>Demo</h6>
                        {isDropdownOpen && (
                            <div className='dropdown-menu'>
                                <Link to="/account" onClick={closeDropdown}>Account Statement</Link>
                                <Link to="/currentbet" onClick={closeDropdown}>Current Bet</Link>
                                <Link to="/CasinoResult" onClick={closeDropdown}>Casino results</Link>
                                <Link to="/setbtnvalue" onClick={closeDropdown}>Set button values</Link>
                                <div className='dropdownsignout'>
                                    <Link to="/login" onClick={closeDropdown}>Sign out</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="news text-white">
                    <marquee scrollamount="3">Experience the adrenaline of the ICC Mens World Cup and the excitement of
                        our Scratch Lottery all in one Cheer for your team on the field and scratch to reveal your
                        winning destiny off it Double the fun double the excitement Dont miss out....</marquee>
                </div>
            </div>

            <div className='head2'>
                <ul>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/ourcasino?tab=Lottery">LOTTERY</Link></li>
                    <li><Link to="/cricket">CRICKET</Link></li>
                    <li><Link to="/tennis">TENNIS</Link></li>
                    <li><Link to="/footbal">FOOTBALL</Link></li>
                    <li><Link to="/table-tennis">TABLE TENNIS</Link></li>
                    <li><Link to="/ourcasino?tab=Baccarat">BACCARAT</Link></li>
                    <li><Link to="/ourcasino?tab=32%20Card">32 CARDS</Link></li>
                    <li><Link to="/ourcasino?tab=Teenpati">TEENPATTI</Link></li>
                    <li><Link to="/ourcasino?tab=Poker">POKER</Link></li>
                    <li><Link to="/ourcasino?tab=Lucky%207">LUCKY 7</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
