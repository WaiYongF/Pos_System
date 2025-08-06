import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdOutlineReorder, MdTableBar } from 'react-icons/md';
import { CiCircleMore } from 'react-icons/ci';
import { BiSolidDish } from 'react-icons/bi';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { setCustomer } from '../../redux/slices/customerSlice';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [guestCount, setGuestCount] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
  const raw = e.target.value;
  const digits = raw.replace(/\D/g, '');   // remove non-digits
  if (digits.length <= 10) {
    setPhone(digits);
  }
};

  const increment = () => {
    if(guestCount >= 8) return;
    setGuestCount((prev) => prev + 1);
  }
  const decrement = () => {
    if(guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  }

  // Helper function to check if a path is active
  const isActive = (path) => location.pathname === path;
  const isFabDisabled = isActive('/tables') || isActive('/menu');

  const handleCreateOrder = () => {
      // send the data to store
      dispatch(setCustomer({name, phone, guests: guestCount}));
      navigate("/tables");
    }

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
      <button
        disabled={isFabDisabled}
        onClick={openModal}
        className={
          `absolute bottom-6 z-10 bg-[#F6B100] text-[#f5f5f5] rounded-full p-4 transition-all ` +
          (isFabDisabled
            ? 'cursor-not-allowed opacity-10 pointer-events-none'
            : 'cursor-pointer')
        }
      >
        <BiSolidDish size={40} />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">Customer Name</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" placeholder="Enter customer name" id="" className="bg-transparent flex-1 text-white focus:outline-none"  />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Customer Phone</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input value={phone} onChange={handlePhoneChange} type="tel" name="" inputMode="numeric" maxLength={10} placeholder="+61-0123456789" id="" className="bg-transparent flex-1 text-white focus:outline-none"  />
          </div>
        </div>
        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-[#ababab]">Guest</label>
          <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
            <button onClick={decrement} className="text-yellow-500 text-2xl cursor-pointer">&minus;</button>
            <span className="text-white">{guestCount} Person</span>
            <button onClick={increment} className="text-yellow-500 text-2xl cursor-pointer">&#43;</button>
          </div>
        </div>

        <button onClick={handleCreateOrder} className="w-full bg-[#F6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700 cursor-pointer">
          Create Order
        </button>
      </Modal>
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

