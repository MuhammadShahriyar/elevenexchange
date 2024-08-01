import React, { useState, useEffect, useRef } from 'react';
import './ourcasino.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
//roulette
import roulette from "/src/assets/casinoimage/roulette.jpg";
import roulette1 from "/src/assets/casinoimage/roulette1.jpg";
import roulette12 from "/src/assets/casinoimage/roulette2.jpg";
//Teenpati
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
//other
import ballbyball from "/src/assets/casinoimage/ballbyball.jpg";
import sicbo from "/src/assets/casinoimage/sicbo.jpg";
import notenum from "/src/assets/casinoimage/notenum.jpg";
import teen1 from "/src/assets/casinoimage/teen1.jpg";
import teen120 from "/src/assets/casinoimage/teen120.jpg";
import trio from "/src/assets/casinoimage/trio.jpg";
import trap from "/src/assets/casinoimage/trap.jpg";
import kbc from "/src/assets/casinoimage/kbc.jpg";
import dum10 from "/src/assets/casinoimage/dum10.jpg";

const OurCasino = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialTab = queryParams.get('tab') || 'Allcasino';
    const [activeTab, setActiveTab] = useState(initialTab);
    const tabRefs = useRef([]);

    const tabData = {
        Allcasino: [
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
        ],
        Roulette: [
            { imgSrc: roulette },
            { imgSrc: roulette1 },
            { imgSrc: roulette12 }
        ],
        Teenpati: [
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
        ],
        Poker: [
            { imgSrc: poker },
            { imgSrc: poker6 },
            { imgSrc: poker20 },
        ],
        Baccarat: [
            { imgSrc: baccarat },
            { imgSrc: baccarat2 },
            { imgSrc: baccarat3 },
        ],
        DragonTiger: [
            { imgSrc: dt6 },
            { imgSrc: dt20 },
            { imgSrc: dt202 },
            { imgSrc: dtl20 },
        ],
        "32 Card": [
            { imgSrc: card32 },
            { imgSrc: card32eu },
        ],
        AnderBahar: [
            { imgSrc: abj },
            { imgSrc: ab3 },
            { imgSrc: ab20 },
        ],
        "Lucky 7": [
            { imgSrc: lottcard },
            { imgSrc: lucky7 },
            { imgSrc: lucky7eu },
        ],
        "3 Card Judgement": [
            { imgSrc: cardj },
        
        ],
        CasinoWar: [
            { imgSrc: war },
        ],
        Worli: [
            { imgSrc: worli },
            { imgSrc: worli2 },
        ],
        Sports: [
            { imgSrc: cmatch20 },
            { imgSrc: cmeter },
            { imgSrc: cmeter1 },
            { imgSrc: superover },
            { imgSrc: superover2 },
            { imgSrc: cricketv3 },
        ],
        Bollywood: [
            { imgSrc: aaa },
            { imgSrc: aaa2 },
            { imgSrc: btable },
        ],
        Lottery: [
            { imgSrc: lottcard },
        ],
        Queen: [
            { imgSrc: queen },
        ],
        Race: [
            { imgSrc: race2 },
            { imgSrc: race17 },
            { imgSrc: race20 },
        ],
        Others: [
            { imgSrc: ballbyball },
            { imgSrc: sicbo },
            { imgSrc: notenum },
            { imgSrc: teen1 },
            { imgSrc: teen120 },
            { imgSrc: trio },
            { imgSrc: kbc },
            { imgSrc: trap },
            { imgSrc: dum10 },
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
    useEffect(() => {
        setActiveTab(initialTab);
    }, [initialTab]);

    useEffect(() => {
        const activeTabIndex = tabs.indexOf(activeTab);
        tabRefs.current[activeTabIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, [activeTab, tabs]);
    return (
        <div className="containerourcasino ">
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
                <div className="gamesourcasino">
                    {tabData[activeTab].map((game, index) => (
                        <div key={index} className="gameourcasino">
                             <Link to="/avitar">
                                <img src={game.imgSrc} alt="" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurCasino;
