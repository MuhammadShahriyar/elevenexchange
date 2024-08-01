import React, { useState, useEffect, useRef } from 'react';
import vaaa from "/src/assets/virtualimges/vaaa.jpg"
import vbtable from "/src/assets/virtualimges/vbtable.jpg"
import vdt6 from "/src/assets/virtualimges/vdt6.jpg"
import vdtl20 from "/src/assets/virtualimges/vdtl20.jpg"
import vlucky7 from "/src/assets/virtualimges/vlucky7.jpg"
import vteen from "/src/assets/virtualimges/vteen.jpg"
import vteen20 from "/src/assets/virtualimges/vteen20.jpg"
import vteenmuf from "/src/assets/virtualimges/vteenmuf.jpg"
import vtrio from "/src/assets/virtualimges/vtrio.jpg"
import { Link } from 'react-router-dom';


const OurVirtual = () => {
    const [activeTab, setActiveTab] = useState('AllCasino');
    const tabRefs = useRef([]);

    const tabData = {
        AllCasino: [
            { imgSrc: vaaa },
            { imgSrc: vbtable },
            { imgSrc: vdt6 },
            { imgSrc: vdtl20 },
            { imgSrc: vdtl20 },
            { imgSrc: vlucky7 },
            { imgSrc: vteen },
            { imgSrc: vteen20 },
            { imgSrc: vteenmuf },
            { imgSrc: vtrio },
        ],
        Teenpatti: [
            { imgSrc: vteen },
            { imgSrc: vteen20 },
            { imgSrc: vteenmuf },
        ],
        DragonTiger: [
            { imgSrc: vdtl20 },
            { imgSrc: vdt6 },
            // { imgSrc: creedroomzimg },
        ],
        Lucky: [
            { imgSrc: vlucky7 },
        ],
        Bollywood: [
            { imgSrc: vaaa },
            { imgSrc: vbtable },
        ],
        others: [
            { imgSrc: vtrio },
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

export default OurVirtual;
