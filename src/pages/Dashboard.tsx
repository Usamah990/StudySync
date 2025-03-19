import ProfileCard from '../components/ui/dashboard/ProfileCard';
import YourTask from '../components/ui/dashboard/YourTask';
import YourSchedule from '../components/ui/dashboard/YourSchedule';
import DateCard from '../components/ui/dashboard/DateCard';
import Percentage from '../components/ui/dashboard/Percentage';
import NotificationToWhatsapp from '../components/ui/dashboard/NotificationToWhatsapp';
import TaskPlannerAI from '../components/ui/dashboard/TaskPlannerAI';
import Navbar from '../components/ui/dashboard/Navbar';


const Dashboard = () => {
  return (
    <div className="bg-[#EEEAE7] min-h-screen p-4">
      <header className="relative z-50 me-28">
        <nav className='flex justify-center'>
          <Navbar />
        </nav>
      </header>
      <main className="max-w-6xl mx-auto grid grid-cols-2 gap-5">
        {/* First row */}
        <div className="col-span-1">
          <ProfileCard />
        </div>
        <div className="col-span-1">
          <YourTask />
        </div>
        
        {/* Second row */}
        <div className="col-span-1">
          <YourSchedule />
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full">
            <div className="col-span-1 row-span-1">
              <DateCard />
            </div>
            <div className="col-span-1 row-span-2">
              <Percentage />
            </div>
            <div className="col-span-1 row-span-2">
              <NotificationToWhatsapp />
            </div>
            <div className="col-span-1 row-span-1">
              <TaskPlannerAI />
            </div>
          </div>
        </div>
      </main>
      
      {/* Sidebar menu button */}
      <div className="fixed bottom-4 left-4 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
        <div className="w-5 h-px bg-white mb-1"></div>
        <div className="w-5 h-px bg-white"></div>
      </div>
    </div>
  );
};

export default Dashboard;