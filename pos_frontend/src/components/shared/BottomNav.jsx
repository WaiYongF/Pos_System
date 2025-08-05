import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdOutlineReorder, MdTableBar } from 'react-icons/md';
import { CiCircleMore } from 'react-icons/ci';
import { BiSolidDish } from 'react-icons/bi';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Helper function to check if a path is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className={`flex items-center justify-center ${isActive('/') ? 'text-[#f5f5f5] bg-[#343434] rounded-[20px]' : 'text-[#ababab]'} w-[200px] cursor-pointer`}
      >
        <FaHome className="inline mr-2" size={20} /> <p>Home</p>
      </button>

      {/* Orders Button */}
      <button
        onClick={() => navigate("/orders")}
        className={`flex items-center justify-center ${isActive('/orders') ? 'text-[#f5f5f5] bg-[#343434] rounded-[20px]' : 'text-[#ababab]'} w-[200px] cursor-pointer`}
      >
        <MdOutlineReorder className="inline mr-2" size={20} /> <p>Orders</p>
      </button>

      {/* Tables Button */}
      <button
        onClick={() => navigate("/tables")}
        className={`flex items-center justify-center ${isActive('/tables') ? 'text-[#f5f5f5] bg-[#343434] rounded-[20px]' : 'text-[#ababab]'} w-[200px] cursor-pointer`}
      >
        <MdTableBar className="inline mr-2" size={20} /><p>Tables</p>
      </button>

      {/* More Button */}
      <button
        onClick={() => navigate("/more")}
        className={`flex items-center justify-center ${isActive('/more') ? 'text-[#f5f5f5] bg-[#343434] rounded-[20px]' : 'text-[#ababab]'} w-[200px] cursor-pointer`}
      >
        <CiCircleMore className="inline mr-2" size={20} /><p>More</p>
      </button>

      {/* Floating Action Button */}
      <button className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};

export default BottomNav;


// import React, { use } from 'react'
// import { FaHome } from 'react-icons/fa'
// import { MdOutlineReorder, MdTableBar } from 'react-icons/md'
// import { CiCircleMore } from 'react-icons/ci'
// import { BiSolidDish } from 'react-icons/bi'
// import { useNavigate } from 'react-router-dom'

// const BottomNav = () => {

//     const navigate = useNavigate();

//     return (
//         <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
//             <button onClick={() => navigate("/")} className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] cursor-pointer">
//                 <FaHome className="inline mr-2" size={20} /> <p>Home</p>
//             </button>
//             <button onClick={() => navigate("/orders")} className="flex items-center justify-center text-[#ababab] w-[200px] cursor-pointer">
//                 <MdOutlineReorder className="inline mr-2" size={20} /> <p>Orders</p>
//             </button>
//             <button onClick={() => navigate("/tables")} className="flex items-center justify-center text-[#ababab] w-[200px] cursor-pointer">
//                 <MdTableBar className="inline mr-2" size={20} /><p>Tables</p>
//             </button>
//             <button onClick={() => navigate("/more")} className="flex items-center justify-center text-[#ababab] w-[200px] cursor-pointer">
//                 <CiCircleMore className="inline mr-2" size={20} /><p>More</p>
//             </button>

//             <button className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center">
//                 <BiSolidDish size={30} />
//             </button>
//         </div>
//     )
// }

// export default BottomNav

