import React from 'react'
import "./sportsdetail.css"
import { useState } from 'react';
import infoicon from "/src/assets/icons8-information-100.png"
const Sportsdetail = () => {

    const [isLiveMatchOpen, setLiveMatchOpen] = useState(false);

    const toggleLiveMatch = () => {
        setLiveMatchOpen(!isLiveMatchOpen);
    };

    return (

        <div className='maintable'>

            <div>

                <div className="table-container">
                    <div className="headsport">
                        <h6>India vs Pakistan</h6>
                        <h6>26/07/2024 01:30:00 AM</h6>
                    </div>
                    <div className="table-header">
                        <div className="header-item">MATCH_ODDS</div>
                        <div className="header-item"></div>
                    </div>
                    <div className="table">
                        <div className="table-row">
                            <div className="team-name">Max: 1.00</div>
                            <div className="odds back">
                                <div className="bold-text">Back</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">Lay</div>
                            </div>
                            <div className="odds lay hiddenlay"></div>
                            <div className="odds lay hiddenlay"></div>
                        </div>
                        <div className="table-row">
                            <div className="team-name">Ireland</div>
                            <div className="odds back">
                                <div className="bold-text">1.92</div>
                                <div className="light-text">13.17</div>
                            </div>
                            <div className="odds back">
                                <div className="bold-text">1.93</div>
                                <div className="light-text">19.34</div>
                            </div>
                            <div className="odds back">
                                <div className="bold-text">1.94</div>
                                <div className="light-text">31.67</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">1.95</div>
                                <div className="light-text">1.99</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">1.96</div>
                                <div className="light-text">83.87</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">1.97</div>
                                <div className="light-text">81.81</div>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="team-name">Zimbabwe</div>
                            <div className="odds back">
                                <div className="bold-text">3.6</div>
                                <div className="light-text">10.74</div>
                            </div>
                            <div className="odds back">
                                <div className="bold-text">3.65</div>
                                <div className="light-text">10.39</div>
                            </div>
                            <div className="odds back">
                                <div className="bold-text">3.7</div>
                                <div className="light-text">12.72</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">3.8</div>
                                <div className="light-text">95.04</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">3.85</div>
                                <div className="light-text">9.46</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">3.9</div>
                                <div className="light-text">12.35</div>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="team-name">The Draw</div>
                            <div className="odds back">
                                <div className="bold-text">4.3</div>
                                <div className="light-text">10.42</div>
                            </div>
                            <div className="odds back">
                                <div className="bold-text">4.4</div>
                                <div className="light-text">11.3</div>
                            </div>
                            <div className="odds back">
                                <div className="bold-text">4.5</div>
                                <div className="light-text">2.14</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">4.6</div>
                                <div className="light-text">5.09</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">4.7</div>
                                <div className="light-text">10.32</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">4.8</div>
                                <div className="light-text">9.61</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* table2 */}
                <div class="game-market market-6">
                    <div class="market-title second-table-header">Oddeven</div>
                    <div class="market-header row">
                        <div class="fancy-min-max-box"></div>
                    </div>
                    <div class="market-body row">
                        <div class="col-12 col-md-6">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            0 Runs
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back smallbox">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">25000</span>
                                        </div>
                                    </div>

                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            1 Runs
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">25000</span>
                                        </div>
                                    </div>
                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            3 Runs
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">15000</span>
                                        </div>
                                    </div>
                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            4 Runs
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">20000</span>
                                        </div>
                                    </div>
                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>

                        </div>
                        <div class="col-12 col-md-6">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            Wicket
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">25000</span>
                                        </div>
                                    </div>
                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            Extra Runs
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">25000</span>
                                        </div>
                                    </div>
                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* table3 */}
                <div class="game-market market-6">
                    <div class="market-title second-table-header">khado</div>
                    <div class="market-header row">
                        <div class="fancy-min-max-box"></div>
                    </div>
                    <div class="market-body row">
                        <div class="col-12 col-md-15">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            0 Runs
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back smallbox">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">25000</span>
                                        </div>
                                    </div>

                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-15">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            1 Runs
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">25000</span>
                                        </div>
                                    </div>
                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-15">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            3 Runs
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">15000</span>
                                        </div>
                                    </div>
                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-15">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            4 Runs
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">20000</span>
                                        </div>
                                    </div>
                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>

                        </div>
                        <div class="col-12 col-md-15">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            Wicket
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">25000</span>
                                        </div>
                                    </div>
                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-15">
                            <div class="fancy-market" data-title="SUSPENDED">
                                <div class="market-row">
                                    <div class="market-nation-detail">
                                        <span class="market-nation-name pointer">
                                            Extra Runs
                                        </span>
                                    </div>
                                    <div class="blb-box suspended-box">
                                        <div class="market-odd-box back">
                                            <span class="market-odd">2.63</span>
                                            <span class="market-volume">25000</span>
                                        </div>
                                    </div>
                                    <div class="fancy-min-max-box">
                                        <div class="fancy-min-max">
                                            <span class="w-100 d-block">Min: 50.00</span>
                                            <span class="w-100 d-block">Max: 25K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="table-container">
                    
                    <div className="table-header">
                        <div className="header-item">TIED_MATCH</div>
                        <div className="header-item"></div>
                    </div>
                    <div className="table">
                        <div className="table-row">
                            <div className="team-name">Max: 1.00</div>
                            <div className="odds back">
                                <div className="bold-text">Back</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">Lay</div>
                            </div>
                            <div className="odds lay hiddenlay"></div>
                            <div className="odds lay hiddenlay"></div>
                        </div>
                       
                        <div className="table-row">
                            <div className="team-name">Yes</div>
                            <div className="odds back">
                                <div className="bold-text">3.6</div>
                                <div className="light-text">10.74</div>
                            </div>
                            <div className="odds back">
                                <div className="bold-text">3.65</div>
                                <div className="light-text">10.39</div>
                            </div>
                            <div className="odds back">
                                <div className="bold-text">3.7</div>
                                <div className="light-text">12.72</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">3.8</div>
                                <div className="light-text">9.04</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">3.85</div>
                                <div className="light-text">9.46</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">3.9</div>
                                <div className="light-text">12.35</div>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="team-name">No</div>
                            <div className="odds back">
                                <div className="bold-text">4.3</div>
                                <div className="light-text">13.42</div>
                            </div>
                            <div className="odds back">
                                <div className="bold-text">4.4</div>
                                <div className="light-text">18.3</div>
                            </div>
                            <div className="odds back">
                                <div className="bold-text">4.5</div>
                                <div className="light-text">25.14</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">4.6</div>
                                <div className="light-text">5.09</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">4.7</div>
                                <div className="light-text">15.32</div>
                            </div>
                            <div className="odds lay">
                                <div className="bold-text">4.8</div>
                                <div className="light-text">8.61</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-lg-4 px-1 sidebox-sports-detail">
                <div className="card-judgement">

                    <img src={infoicon} alt="" />


                    <p>3 card judgement</p>

                </div>
                <div className="live-match" onClick={toggleLiveMatch}>
                    <h6>Livematch</h6>
                </div>
                <div className="my-bet">
                    <h6>My bet</h6>
                    <table className='card-judgement-table'>
                        <thead>
                            <tr>
                                <th className='oddcjh'>Matched Bet</th>
                                <th className="oddcj">Odds</th>
                                <th className="oddcj">Stake</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                {isLiveMatchOpen && (
                    <div className="live-match-screen">

                        <p>Live match details go here...</p>
                        <button onClick={toggleLiveMatch}>Close</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sportsdetail