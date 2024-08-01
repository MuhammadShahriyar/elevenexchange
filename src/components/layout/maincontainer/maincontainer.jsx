import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./maincontainer.css";
import footballimg from "/src/assets/blink tabs/icons8-football-100.png";
import ball from "/src/assets/blink tabs/icons8-ball-100.png";
import Cricekt from '../../gamestable/cricket/circket';
import Football from '../../gamestable/football/football';
import Tennis from '../../gamestable/tennis/tennis';
// Images
//rollte
import roulette from "/src/assets/casinoimage/roulette.jpg";
import roulette1 from "/src/assets/casinoimage/roulette1.jpg";
import roulette12 from "/src/assets/casinoimage/roulette2.jpg";
//teenpati
import teen from "/src/assets/casinoimage/teen.jpg";
import teen6 from "/src/assets/casinoimage/teen6.jpg";
import teen20 from "/src/assets/casinoimage/teen20.jpg";
import teen8 from "/src/assets/casinoimage/teen8.jpg";
import teen9 from "/src/assets/casinoimage/teen9.jpg";
import teen3 from "/src/assets/casinoimage/teen3.jpg";
import teen32 from "/src/assets/casinoimage/teen32.jpg";
import teen33 from "/src/assets/casinoimage/teen33.jpg";
import teenmuf from "/src/assets/casinoimage/teenmuf.jpg";
import teen20b from "/src/assets/casinoimage/teen20b.jpg";
//poker
import poker from "/src/assets/casinoimage/poker.jpg";
import poker6 from "/src/assets/casinoimage/poker6.jpg";
import poker20 from "/src/assets/casinoimage/poker20.jpg";
//baccarat
import baccarat from "/src/assets/casinoimage/baccarat.jpg";
import baccarat2 from "/src/assets/casinoimage/baccarat2.jpg";
import baccarat3 from "/src/assets/casinoimage/teensin.jpg";
//dragon
import dt6 from "/src/assets/casinoimage/dt6.jpg";
import dt20 from "/src/assets/casinoimage/dt20.jpg";
import dt202 from "/src/assets/casinoimage/dt202.jpg";
import dtl20 from "/src/assets/casinoimage/dtl20.jpg";
//32card
import card32 from "/src/assets/casinoimage/card32.jpg";
import card32eu from "/src/assets/casinoimage/card32eu.jpg";
//bollywood
import aaa from "/src/assets/casinoimage/aaa.jpg";
import aaa2 from "/src/assets/casinoimage/aaa2.jpg";
import abj from "/src/assets/casinoimage/abj.jpg";
import ab3 from "/src/assets/casinoimage/ab3.jpg";
import ab20 from "/src/assets/casinoimage/ab20.jpg";
//lottery
import lottcard from "/src/assets/casinoimage/lottcard.jpg";
import lucky7 from "/src/assets/casinoimage/lucky7.jpg";
import lucky7eu from "/src/assets/casinoimage/ab20.jpg";
import cardj from "/src/assets/casinoimage/3cardj.jpg";
//worli
import worli from "/src/assets/casinoimage/worli.jpg";
import worli2 from "/src/assets/casinoimage/worli2.jpg";
import btable from "/src/assets/casinoimage/btable.jpg";
//sports
import cmatch20 from "/src/assets/casinoimage/cmatch20.jpg";
import cmeter from "/src/assets/casinoimage/cmeter.jpg";
import cmeter1 from "/src/assets/casinoimage/cmeter1.jpg";
import superover from "/src/assets/casinoimage/superover.jpg";
import superover2 from "/src/assets/casinoimage/superover2.jpg";
import cricketv3 from "/src/assets/casinoimage/cricketv3.jpg";
//war
import war from "/src/assets/casinoimage/war.jpg";
//queen
import queen from "/src/assets/casinoimage/queen.jpg";
//Races
import race2 from "/src/assets/casinoimage/race2.jpg";
import race17 from "/src/assets/casinoimage/race17.jpg";
import race20 from "/src/assets/casinoimage/race20.jpg";

import kbc from "/src/assets/casinoimage/kbc.jpg";
import dum10 from "/src/assets/casinoimage/dum10.jpg";

//icons
import icon1 from "/src/assets/tabs icons/icons8-cricket-100.png";
import icon2 from "/src/assets/tabs icons/icons8-football-100.png";
import icon3 from "/src/assets/tabs icons/icons8-table-tennis-53.png";

import icon4 from "/src/assets/tabs icons/icons8-avatar-50.png";
import icon5 from "/src/assets/tabs icons/icons8-billiard-48.png";
import icon6 from "/src/assets/tabs icons/icons8-boxing-96.png";
import icon7 from "/src/assets/tabs icons/icons8-american-football-64.png";
import icon8 from "/src/assets/tabs icons/icons8-ball-100.png";
import icon9 from "/src/assets/tabs icons/icons8-horse-64.png";
import icon10 from "/src/assets/tabs icons/icons8-basket-ball-96.png";
import icon11 from "/src/assets/tabs icons/icons8-badminton-100.png";



const Maincontainer = () => {

    const tabs = [
        { name: 'Cricket', icon: icon1 },
        { name: 'Football', icon: icon2 },
        { name: 'Tennis', icon: icon8 },
        { name: 'Esoccer', icon: icon4 },
        { name: 'Horse Racing', icon: icon9 },
        { name: 'Table Tennis', icon: icon3 },
        { name: 'Basketball', icon: icon10 },
        { name: 'Boxing', icon: icon6 },
        { name: 'Mixed Martial Arts', icon: icon6 },
        { name: 'American Football', icon: icon7 },
        { name: 'Snooker', icon: icon5 },
        { name: 'Badminton', icon: icon11 },
        // { name: 'Snooker', icon: icon3 },
        // Add more tabs with corresponding icons
    ];


    const [activeTab, setActiveTab] = useState('Cricket');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const tabData = [
        { imgSrc: teen },
        { imgSrc: teen6 },
        { imgSrc: teen20 },
        { imgSrc: teen8 },
        { imgSrc: teen9 },
        { imgSrc: teen3 },
        { imgSrc: teen32 },
        { imgSrc: teen33 },
        { imgSrc: teenmuf },
        { imgSrc: teen20b },
        { imgSrc: poker },
        { imgSrc: poker6 },
        { imgSrc: poker20 },
        { imgSrc: baccarat },
        { imgSrc: baccarat2 },
        { imgSrc: dt6 },
        { imgSrc: dt20 },
        { imgSrc: card32 },
        { imgSrc: card32eu },
        { imgSrc: aaa2 },
        { imgSrc: abj },
        { imgSrc: btable },
        { imgSrc: cmatch20 },
        { imgSrc: cmeter },
        { imgSrc: cmeter1 },
        { imgSrc: dt202 },
        { imgSrc: dtl20 },
        { imgSrc: race2 },
        { imgSrc: race17 },
        { imgSrc: race20 },
        { imgSrc: roulette },
        { imgSrc: roulette1 },
        { imgSrc: roulette12 },
        { imgSrc: aaa },
        { imgSrc: baccarat3 },
        { imgSrc: ab3 },
        { imgSrc: ab20 },
        { imgSrc: lottcard },
        { imgSrc: lucky7 },
        { imgSrc: lucky7eu },
        { imgSrc: worli },
        { imgSrc: worli2 },
        { imgSrc: superover },
        { imgSrc: superover2 },
        { imgSrc: cricketv3 },
        { imgSrc: cardj },
        { imgSrc: war },
        { imgSrc: queen },
        { imgSrc: kbc },
        { imgSrc: dum10 },

    ];

    return (
        <div>
            <div className='mainpart'>
                <div className='latest-event  d-xl-flex'>
                    <div className='latest-event-item'>
                        <Link to="/brisbane-vs-perth" className='blinkme'>
                            <img src={footballimg} alt="" />
                            Brisbane Roar v Perth Glory
                        </Link>
                    </div>
                    <div className='latest-event-item'>
                        <Link to="/sel-vs-mir" className='blinkme'>
                            <img src={ball} alt="" />
                            Sel Janicijevic v Mir Bulgaru
                        </Link>
                    </div>
                    <div className='latest-event-item'>
                        <Link to="/bassols-vs-bondar" className='blinkme'>
                            <img src={ball} alt="" />
                            Bassols Ribera v A Bondar
                        </Link>
                    </div>
                    <div className='latest-event-item'>
                        <Link to="/paquet-vs-sim" className='blinkme'>
                            <img src={ball} alt="" />
                            Paquet v Sim Waltert
                        </Link>
                    </div>
                    <div className='latest-event-item'>
                        <Link to="/paquet-vs-sim" className='blinkme'>
                            <img src={ball} alt="" />
                            L Noskova v El Seidel
                        </Link>
                    </div>
                </div>
                <div>
                    <ul className='nav nav-tabs d-xl-none menu-tabs'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/ourcasino?tab=Lottery">LOTTERY</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/ourcasino?tab=Sports">SPORTS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/ourcasino">OUR CASINO</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/livecasino">LIVE CASINO</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/slots">SLOTS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/fantasy">FANTASY</Link>
                        </li>
                    </ul>
                </div>



                <div className='tabsreal'>
                    <ul>
                        {tabs.map((tab) => (
                            <li
                                key={tab.name}
                                className={activeTab === tab.name ? 'active' : ''}
                                onClick={() => handleTabClick(tab.name)}
                            >
                                <img src={tab.icon} alt={`${tab.name} icon`} className="tab-icon" />
                                {tab.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {activeTab === 'Cricket' && <Cricekt />}
                    {activeTab === 'Football' && <Football />}
                    {activeTab === 'Tennis' && <Tennis />}
                </div>
                <div className="image-gallery">
                    {tabData.map((game, index) => (
                        <Link to="/Avitar">
                        <img key={index} src={game.imgSrc} alt={`Casino game ${index}`} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Maincontainer;
