import notificationLogo from '../../../assets/whatsapp-logo.png'

const NotificationToWhatsapp = () => {
  return (
    <div className="bg-[#323232] rounded-tr-3xl rounded-4xl shadow-xl w-full h-[100%] flex flex-col justify-between">
      <div className="text-right me-1  text-white">
        <p className="font-bold absolute right-93 bottom-15  text-xl">
          Notification To
          <br />
          Whatsapp
        </p>
      </div>
      <div className="w-[145px] overflow-hidden flex justify-end">
        <img
          src={notificationLogo}
          alt="WhatsApp Logo"
          className="w-full inline h-full"
        />
      </div>
    </div>
  );
};

export default NotificationToWhatsapp
