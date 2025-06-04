import { useNavigate } from "react-router-dom";
import Heading from "../components/ui/Heading";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 py-8 px-4 h-full justify-end">
      <div>
        <Heading>Welcome to PopX</Heading>
        <Heading type="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Heading>
      </div>
      <PrimaryButton onClick={() => navigate("/signUp")}>
        Create Account
      </PrimaryButton>
      <SecondaryButton onClick={() => navigate("/signIn")}>
        Already Registered? Login
      </SecondaryButton>
    </div>
  );
}

export default Home;
