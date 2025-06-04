import { useNavigate } from "react-router-dom";
import DangerButton from "../components/ui/DangreButton";
import ProfileImage from "../components/ProfileImage";

function Account() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 bg-gray h-full">
      <div className="bg-white">
        <h1 className="p-4 shadow-xs">Account Settings</h1>
      </div>
      <div className="p-4 flex flex-col gap-8 border-b border-dashed border-gray-300">
        <div className="flex gap-4">
          <ProfileImage
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrewperformance1-697509.jpg&fm=jpg"
            logoSrc="./x.svg"
          />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold">Marry Doe</h4>
            <span className="text-sm ">Marry@Gmail.Com</span>
          </div>
        </div>
        <p className="text-sm">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <div className="flex-1  border-b border-dashed border-gray-300 px-4">
        <DangerButton className="w-full" onClick={() => navigate("/")}>
          Log out
        </DangerButton>
      </div>
      <div></div>
    </div>
  );
}

export default Account;
