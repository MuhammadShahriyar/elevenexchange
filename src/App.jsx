import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Football from './components/gamestable/football/football';
import Cricekt from './components/gamestable/cricket/circket';
import Tennis from './components/gamestable/tennis/tennis';
import Avitar from './components/avitar/avitar';
import Sportsdetail from './components/sportsdetail/sportsdetail';
import Maincontainer from './components/layout/maincontainer/maincontainer';
import Sidebar from './components/layout/sidebar/sidebar';
import Ballbyball from './components/ballbyball/ballbyball';
import OurCasino from './components/casinos/ourcasino/ourcasino';
import LiveCasino from './components/casinos/livecasino/livecasino';
import OurVirtual from './components/casinos/ourvirtual/ourvirtual';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Accountstatment from './components/demo/Accountstatement/accountstatment';
import Currentbet from './components/demo/currentbet/currentbet';
import Setbtnvalue from './components/demo/setbtnvalue/setbtnvalue';
import CasinoResult from './components/demo/casino/casino';
import Login from './components/login/login';


function App() {

  const location = useLocation();
  const shouldDisplayHeaderAndSidebar = location.pathname !== '/login';


  return (
    <>
      {shouldDisplayHeaderAndSidebar && <Header />}
      <div className="main-content">
        {shouldDisplayHeaderAndSidebar && <Sidebar />}
        <div className='routes'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Maincontainer />} />
            <Route path='/livecasino' element={<LiveCasino />} />
            <Route path='/ourcasino' element={<OurCasino />} />
            <Route path='/ourvirtual' element={<OurVirtual />} />
            <Route path='/footbal' element={<Football />} />
            <Route path='/cricket' element={<Cricekt />} />
            <Route path='/tennis' element={<Tennis />} />
            <Route path='/sportsdetail' element={<Sportsdetail />} />
            <Route path='/account' element={<Accountstatment />} />
            <Route path='/CasinoResult' element={<CasinoResult />} />
            <Route path='/currentbet' element={<Currentbet />} />
            <Route path='/setbtnvalue' element={<Setbtnvalue />} />
            <Route path='/avitar' element={<Avitar />} />
            <Route path='/ballbyball' element={<Ballbyball />} />


            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
      {shouldDisplayHeaderAndSidebar && <Footer />}

    </>
  );
}

export default App;
