import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";
import plusicon from "/src/assets/icons8-plus-100.png";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    'racing-sports': true,
    'others': true,
    'all-sports': true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div className='col-lg-2 ps-0 px-0 pr-1 removebar'>
      <div className="sidebar">
        <div className="sidebar-content">
          <h2 onClick={() => toggleSection('racing-sports')} className='arrdropdown'>
            Racing Sports <span className='dropdown-toggle'></span>
          </h2>
          <ul className={`dropdown-content ${openSections['racing-sports'] ? 'open' : ''}`}>
            <Link to="/horse-racing">
              <li>
                Horse Racing
              </li>
            </Link>
            <Link to="/greyhound-racing">
              <li>
                Greyhound Racing
              </li>
            </Link>
          </ul>

          <h2 onClick={() => toggleSection('others')} className='arrdropdown'>
            Others <span className='dropdown-toggle'></span>
          </h2>
          <ul className={`dropdown-content ${openSections['others'] ? 'open' : ''}`}>
            <Link to="/ourcasino">
              <li>
               
                <span className="blinkme">Our Casino</span>
              </li>
            </Link>
            <Link to="/livecasino">
              <li>
                <span className="blinkme">live casino</span>
              </li>
            </Link>

            <Link to="/ourvirtual">
              <li >
                Our Virtual
              </li>
            </Link>
            <Link to="/slot-game">
              <li>
                Slot Game
              </li>
            </Link>
            <Link to="/fantasy-game">
              <li>
                Fantasy Game
              </li>
            </Link>
          </ul>

          <h2 onClick={() => toggleSection('all-sports')} className='arrdropdown'>
            All Sports <span className='dropdown-toggle'></span>
          </h2>
          <ul className={`dropdown-content ${openSections['all-sports'] ? 'open' : ''}`}>
            <Link to="/politics">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                Politics
              </li>
            </Link>
            <Link to="/cricket">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                Cricket
              </li>
            </Link>
            <Link to="/football">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                Football
              </li>
            </Link>
            <Link to="/tennis">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                Tennis
              </li>
            </Link>
            <Link to="/table-tennis">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                Table Tennis
              </li>
            </Link>
            <Link to="/badminton">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                Badminton
              </li>
            </Link>
            <Link to="/esoccer">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                Esoccer
              </li>
            </Link>
            <Link to="/basketball">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                Basketball
              </li>
            </Link>
            <Link to="/volleyball">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                Volleyball
              </li>
            </Link>
            <Link to="/snooker">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                Snooker
              </li>
            </Link>
            <Link to="/ice-hockey">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                Ice Hockey
              </li>
            </Link>
            <Link to="/f-games">
              <li>
                <img src={plusicon} alt="Plus icon" className="plus-icon" onClick={preventDefault} />
                F Games
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
