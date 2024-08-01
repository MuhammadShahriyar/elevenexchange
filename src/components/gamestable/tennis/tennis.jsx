import React from 'react';
import { Link } from 'react-router-dom';
import fc from "/src/assets/ic_fancy.png";
import ic from "/src/assets/ic_vir.png";
import bm from "/src/assets/ic_bm.png";
import tv from "/src/assets/icons8-tv-96.png";

const Tennis = () => {
    return (
        <>

            <div className="rowyes">
                <div className="col-lg-15 px-0 w-100%">
                    <div className="tab-content" id="pills-tabContent">
                  <h2>Tennis</h2>
                        <div
                            className="tab-pane fade show active"
                            id="pills-Homenav"
                            role="tabpanel"
                            aria-labelledby="pills-Homenav-tab"
                            tabIndex={0}
                        >
                            <div className="row mx-0 rightsidecontent">
                                <div className="home-page">
                                    <div className="bet-table">
                                        <div className="bet-table-header">
                                            <div className="bet-nation-name">
                                                <b>Game</b>
                                            </div>
                                            <div className="bet-nation-odd">
                                                <b>1</b>
                                            </div>
                                            <div className="bet-nation-odd">
                                                <b>X</b>
                                            </div>
                                            <div className="bet-nation-odd">
                                                <b>2</b>
                                            </div>
                                        </div>
                                        <div className="bet-table-body">
                                            <div className="bet-table-row">
                                                <div className="bet-nation-name">
                                                    <Link
                                                        className="bet-nation-game-name"
                                                        to="/sportsdetail"
                                                    >
                                                        <span>spain vs englind</span>
                                                    </Link>
                                                    <div className="game-icons">
                                                        <div className="game-icon">
                                                            <span className="active" />
                                                        </div>
                                                        <div className="game-icon">
                                                            <img src={tv} alt="" />
                                                        </div>
                                                        <div className="game-icon">
                                                            <img src={fc} />
                                                        </div>
                                                        <div className="game-icon" />
                                                        <div className="game-icon" />
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bet-table-row">
                                                <div className="bet-nation-name">
                                                    <Link className="bet-nation-game-name dateissue" to="/sportsdetail">
                                                        <span>Melbourne Renegades XI v Sydney Sixers XI</span>
                                                        <span className="d-none d-md-inline-block">
                                                            &nbsp;/&nbsp;
                                                        </span>
                                                        <span className='date'>14/06/2024 02:35:00 PM</span>
                                                    </Link>
                                                    <div className="game-icons">
                                                        <div className="game-icon">
                                                            <span className="active" />
                                                        </div>
                                                        <div className="game-icon" />
                                                        <div className="game-icon">
                                                            <img src={fc} />
                                                        </div>
                                                        <div className="game-icon">
                                                            <img src={bm} />
                                                        </div>
                                                        <div className="game-icon">
                                                            <img src={ic} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd d-xl-none">
                                                    <b>1</b>
                                                </div>
                                                <div className="bet-nation-odd d-xl-none">
                                                    <b>X</b>
                                                </div>
                                                <div className="bet-nation-odd d-xl-none">
                                                    <b>2</b>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bet-table-row">
                                                <div className="bet-nation-name">
                                                    <Link className="bet-nation-game-name dateissue" to="/sportsdetail">
                                                        <span>SLZ XI v TKR XI</span>
                                                        <span className="d-none d-md-inline-block">
                                                            &nbsp;/&nbsp;
                                                        </span>
                                                        <span className='date'>14/06/2024 02:50:00 PM</span>
                                                    </Link>
                                                    <div className="game-icons">
                                                        <div className="game-icon">
                                                            <span className="active" />
                                                        </div>
                                                        <div className="game-icon" />
                                                        <div className="game-icon">
                                                            <img src={fc} />
                                                        </div>
                                                        <div className="game-icon" />
                                                        <div className="game-icon">
                                                            <img src={ic} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd d-xl-none">
                                                    <b>1</b>
                                                </div>
                                                <div className="bet-nation-odd d-xl-none">
                                                    <b>X</b>
                                                </div>
                                                <div className="bet-nation-odd d-xl-none">
                                                    <b>2</b>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bet-table-row">
                                                <div className="bet-nation-name">
                                                    <Link className="bet-nation-game-name dateissue" to="/sportsdetail">
                                                        <span>Kabul Zalmi v Band-e Amir Stars</span>
                                                        <span className="d-none d-md-inline-block">
                                                            &nbsp;/&nbsp;
                                                        </span>
                                                        <span className='date'>14/06/2024 03:00:00 PM</span>
                                                    </Link>
                                                    <div className="game-icons">
                                                        <div className="game-icon">
                                                            <span className="active" />
                                                        </div>
                                                        <div className="game-icon">
                                                            <img src={tv} alt="" />
                                                        </div>
                                                        <div className="game-icon">
                                                            <img src={fc} />
                                                        </div>
                                                        <div className="game-icon">
                                                            <img src={bm} />
                                                        </div>
                                                        <div className="game-icon" />
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd d-xl-none">
                                                    <b>1</b>
                                                </div>
                                                <div className="bet-nation-odd d-xl-none">
                                                    <b>X</b>
                                                </div>
                                                <div className="bet-nation-odd d-xl-none">
                                                    <b>2</b>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="bet-nation-odd">
                                                    <div className="back odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                    <div className="lay odd-box">
                                                        <span className="bet-odd">
                                                            <b>-</b>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tennis;
