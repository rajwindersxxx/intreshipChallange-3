import { useNavigate } from "react-router-dom";
import Heading from "../components/ui/Heading";
import PrimaryButton from "../components/ui/PrimaryButton";
import RadioButton from "../components/ui/RadioButton";
import TextInput from "../components/ui/TextInput";
const formFields: {
  label: string;
  type: "text" | "password" | "email" | "tel";
  placeholder: string;
  name: string;
  required?: boolean;
}[] = [
  {
    label: "Full Name",
    type: "text",
    placeholder: "Enter full name",
    name: "fullName",
    required: true,
  },
  {
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter phone number",
    name: "phone",
    required: true,
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "Enter email address",
    name: "email",
    required: true,
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    name: "password",
    required: true,
  },
  {
    label: "Company Name",
    type: "text",
    placeholder: "Enter company name",
    name: "company",
    required: true,
  },
];
function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 py-8 px-4 h-full ">
      <Heading>Create your PopX account</Heading>
      <form className="flex flex-col gap-8 flex-1">
        {formFields.map((field) => (
          <TextInput
            key={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            required={field.required}
          />
        ))}
        <fieldset>
          <legend>
            Are you an Agency? <span className="text-important">*</span>
          </legend>
          <div className="flex gap-4 py-4">
            <RadioButton label="yes" name="agency" />
            <RadioButton label="no" name="agency" />
          </div>
        </fieldset>
        <div className="flex justify-end flex-col flex-1 ">
          <PrimaryButton
            className="w-full"
            onClick={() => navigate("/account")}
          >
            Create Account
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
