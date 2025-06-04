import { useState } from "react";
import Heading from "../components/ui/Heading";
import TextInput from "../components/ui/TextInput";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/ui/PrimaryButton";

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const isDisable = password.length === 0 || email.length === 0;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 py-8 px-4 h-full ">
      <Heading>Signin to your PopX account</Heading>
      <Heading type="secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </Heading>
      <form
        className="flex flex-col gap-6"
        onSubmit={() => navigate("/account")}
      >
        <TextInput
          label="Email Address"
          type="text"
          placeholder="Enter email Address"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <PrimaryButton disabled={isDisable} type="submit">
          Login
        </PrimaryButton>
      </form>
    </div>
  );
}

export default SignIn;
