import React, { useState, useEffect, useRef } from 'react';
// import './casino.css'; 
import img1 from "/src/assets/livecasino/32-cards-2.jpg";
import img2 from "/src/assets/livecasino/32-cards.jpg";
import img3 from "/src/assets/livecasino/baccarat-2.jpg";
import img4 from "/src/assets/livecasino/baccarat-b-2.jpg";
import img5 from "/src/assets/livecasino/baccarat-b.jpg";
import img6 from "/src/assets/livecasino/baccarat.jpg";
import img7 from "/src/assets/livecasino/dragontiger-2.jpg";
import img8 from "/src/assets/livecasino/lucky-7-2.jpg";
import img9 from "/src/assets/livecasino/lucky-7.jpg";
import img10 from "/src/assets/livecasino/teen-patti-20-20-2.jpg";
import img11 from "/src/assets/livecasino/teen-patti-20-20.jpg";
import img13 from "/src/assets/livecasino/teen-patti-one-day-2.jpg";
import img14 from "/src/assets/livecasino/teen-patti-one-day.jpg";
import creedroomzimg from "/src/assets/livecasino/Rouletteimage/400040324.jpg";
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
import poker from "/src/assets/casinoimage/poker.jpg";
import poker6 from "/src/assets/casinoimage/poker6.jpg";
import poker20 from "/src/assets/casinoimage/poker20.jpg";
import baccarat from "/src/assets/casinoimage/baccarat.jpg";
import baccarat2 from "/src/assets/casinoimage/baccarat2.jpg";
import dt6 from "/src/assets/casinoimage/dt6.jpg";
import dt20 from "/src/assets/casinoimage/dt20.jpg";
import card32 from "/src/assets/casinoimage/card32.jpg";
import card32eu from "/src/assets/casinoimage/card32eu.jpg";
import { Link } from 'react-router-dom';

const LiveCasino = () => {
    const [activeTab, setActiveTab] = useState('Tembo');
    const tabRefs = useRef([]);

    const tabData = {
        Tembo: [
            { imgSrc: img1 },
            { imgSrc: img2 },
            { imgSrc: img3 },
            { imgSrc: img4 },
            { imgSrc: img5 },
            { imgSrc: img6 },
            { imgSrc: img7 },
            { imgSrc: img8 },
            { imgSrc: img9 },
            { imgSrc: img10 },
            { imgSrc: img11 },
            { imgSrc: img13 },
            { imgSrc: img14 },
        ],
        Creedroomz: [
            { imgSrc: creedroomzimg },
            { imgSrc: creedroomzimg },
            { imgSrc: creedroomzimg },
            { imgSrc: creedroomzimg },
            { imgSrc: creedroomzimg },
            { imgSrc: creedroomzimg },
            { imgSrc: creedroomzimg },
            { imgSrc: creedroomzimg },
            { imgSrc: creedroomzimg },
            { imgSrc: creedroomzimg },
            { imgSrc: creedroomzimg },
        ],
        VivoGames: [
            { imgSrc: teen },
            { imgSrc: teen6 },
            { imgSrc: teen20 },
            { imgSrc: teen8 },
            { imgSrc: teen9 },
            { imgSrc: teen32 },
            { imgSrc: teen33 },
            { imgSrc: teenmuf },
            { imgSrc: teen3 },
            { imgSrc: teen20b },
            // { imgSrc: creedroomzimg },
        ],
        LuckyStreak: [
            { imgSrc: poker },
            { imgSrc: poker6 },
            { imgSrc: poker20 },
        ],
        Evolution: [
            { imgSrc: baccarat },
            { imgSrc: baccarat2 },
        ],
        EZUGI: [
            { imgSrc: dt6 },
            { imgSrc: dt20 },
        ],
        CockFights: [
            { imgSrc: card32 },
            { imgSrc: card32eu },
        ],
    };

    const tabs = Object.keys(tabData);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const currentIndex = tabs.indexOf(activeTab);
            let newIndex;

            if (event.key === 'ArrowUp') {
                newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                event.preventDefault();
            } else if (event.key === 'ArrowDown') {
                newIndex = (currentIndex + 1) % tabs.length;
                event.preventDefault();
            } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                event.preventDefault();
                return;
            }

            if (newIndex !== undefined) {
                setActiveTab(tabs[newIndex]);
                tabRefs.current[newIndex]?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeTab, tabs]);

    return (
        <div className="containerourcasino">
            <div className="sideoptionsourcasino">
                {tabs.map((tab, index) => (
                    <div
                        key={tab}
                        className={`tabourcasino ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                        ref={(el) => (tabRefs.current[index] = el)}
                        tabIndex="0"
                    >
                        {tab}
                    </div>
                ))}
            </div>
            <div className="contentourcasino">
                <div className="header">{activeTab}</div>
                <div className="gamesourcasino">
                    {tabData[activeTab].map((game, index) => (
                        <div key={index} className="gameourcasino">
                            <Link to="/Avitar">
                            <img src={game.imgSrc} alt="" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LiveCasino;
