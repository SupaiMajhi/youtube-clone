import React from 'react';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

//icon imports
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";


function Navbar() {
  return (
  <>
  {/**
   * NAVBAR
   */}
  <div className="nav flex flex-row justify-between items-center px-7">
    {/**
     * NAVBAR LEFT
     */}
    <div className="nav-left flex flex-row items-center gap-4">
      <div className="w-[40px] h-[40px] rounded-full cursor-pointer flex justify-center items-center hover:bg-whiteSmoke">
        <MenuIcon className='!w-6 !h-6' />
      </div>
    <img src="/images/logo.jpg" alt="logo" className="w-[100px]" />
    </div>


    {/* NAVBAR CENTER*/}
    <div className="nav-center flex flex-row items-center gap-3">
        <div className="input-holder flex flex-row items-center relative">
        <input type="text" placeholder="Search" className="w-[500px] px-4 py-1 rounded-full border border-slate-950 text-base font-normal"/>
        <SearchIcon className="absolute right-2"/>
        </div>
    <MicIcon/>
    </div>

    {/**
     * NAVBAR RIGHT
     */}
     <div className="nav-right flex flex-row items-center gap-4">
        <VideoCallIcon/>
        <NotificationsNoneIcon className="relative"/>
        <div className="badge absolute bg-red-700 top-3 right-[58px] w-4 h-4 rounded-full flex items-center justify-center p-2">
        <span className="text-white text-sm">5</span>
        </div>
        <AccountCircleIcon/>
     </div>
  </div>
  </>
  )
}


export default Navbar;