/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Calendar, BarChart3, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Apps');

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-full w-96 h-14 bg-white shadow-lg">
      <div className="flex justify-around items-center h-full w-full mx-auto relative">
        <NavItem 
          icon={<Calendar className="w-8 h-8" />} 
          isActive={activeTab === 'Calendar'}
          onClick={() => setActiveTab('Calendar')}
        />
        <NavItem 
          icon={<LayoutDashboard className="w-8 h-8" />} 
          isActive={activeTab === 'Apps'}
          onClick={() => setActiveTab('Apps')}
        />
        <NavItem 
          icon={<BarChart3 className="w-8 h-8" />} 
          isActive={activeTab === 'Analytics'}
          onClick={() => setActiveTab('Analytics')}
        />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, isActive, onClick }) => {
  return (
    <button 
      className="flex flex-col items-center justify-center w-20 h-full relative"
      onClick={onClick}
    >
      {/* Efek bulatan di atas icon yang aktif */}
      {isActive && (
        <div className="absolute -top-4 w-12 h-5 bg-white border-r-2 z-0 border-gray-200 rounded-t-full"></div>
      )}
      
      <div className={`mb-1 transition-all duration-300 ${isActive ? 'translate-y-[-8px]' : ''}`}>
        <div className={`${isActive ? 'text-black' : 'text-gray-500'} hover:text-gray-800 transition-colors z-10`}>
          {icon}
        </div>
      </div>
    </button>
  );
};

export default Navbar;
