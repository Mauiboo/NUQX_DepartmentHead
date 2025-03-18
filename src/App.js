import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar'; 
import Reports from './pages/Reports';
import TransactionLog from './pages/TransactionLog';
import SystemHealth from './pages/SystemHealth';
import Executives from './pages/Executives';
import Settings from './pages/Settings';


function App() {
  return (
    <div className='flex h-screen bg-white text-gray-900 overflow-hidden'>
      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-white opacity-100' />
      </div>

      <Header />
      <SideBar /> 

      <Routes>
        <Route path='/reports' element={<Reports />} />
        <Route path='/transactionlog' element={<TransactionLog />} />
        <Route path='/executives' element={<Executives />} />
        <Route path='/systemhealth' element={<SystemHealth />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;