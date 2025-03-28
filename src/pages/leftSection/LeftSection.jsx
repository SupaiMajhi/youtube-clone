import React from 'react';

function LeftSection() {
  return (
    <>
    <div className="left-section max-w-[250px] h-[600px] border-r-4">
    <ul className="flex flex-col text-base font-medium">
        <li className="py-2 pl-2 hover:bg-black hover:text-white cursor-pointer">Home</li>
        <li className="py-2 pl-2 hover:bg-black hover:text-white cursor-pointer">Shorts</li>
        <li className="py-2 pl-2 hover:bg-black hover:text-white cursor-pointer">Subscriptions</li>
        <li className="py-2 pl-2 hover:bg-black hover:text-white cursor-pointer">Your channel</li>
        <li className="py-2 pl-2 hover:bg-black hover:text-white cursor-pointer">History</li>
        <li className="py-2 pl-2 hover:bg-black hover:text-white cursor-pointer">Playlists</li>
    </ul>
    </div>
    </>
  )
}

export default LeftSection;