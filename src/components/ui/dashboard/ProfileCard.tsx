import profilePhoto from '../../../../public/images/iconProfile.png'


const ProfileCard = () => {
  return (
    <div className="bg-[#E6DFD3] relative px-8 py-5 rounded-[80px] shadow-2xl w-full h-full">
      {/* Photo Profile */}
      <div className="flex items-center">
        <img
          src={profilePhoto}
          alt="Photo Profile"
          className="w-15 h-15 sm:w-15 sm:h-15 md:w-15 md:h-15 rounded-full"
        />
        <div className="ml-4">
          {/* Name and Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Yohanes</h1>
          <h2 className="text-gray-500 text-sm sm:text-md">Mahasiswa</h2>
        </div>
      </div>

      {/* Welcome Message */}
      <h1 className="text-xl sm:text-2xl md:text-3xl mb-2 mt-2">
        Selamat Datang di <span className="text-[#F2430D]">StudySync</span>
      </h1>
      <p className="text-gray-600 text-sm sm:text-md md:text-lg">
        Sebuah platform berbasis web yang dirancang untuk membantu mahasiswa
        dalam mengelola tugas, jadwal kuliah, dan acara kampus dengan lebih
        efisien. Dengan bantuan AI-powered task planner, mahasiswa dapat
        secara otomatis menyusun jadwal optimal berdasarkan deadline tugas,
        jadwal kuliah, dan event kampus.
      </p>
    </div>
  );
};

export default ProfileCard;
