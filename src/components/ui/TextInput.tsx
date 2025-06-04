interface props {
  placeholder?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  required?: boolean;
  name: string;
  type: "text" | "password" | "email" | "tel";
}
function TextInput({
  placeholder,
  label,
  onChange,
  required = false,
  name,
  type = "text",
  ...props
}: props) {
  return (
    <div className="relative ">
      {label && (
        <label
          className="text-xs absolute -top-2 left-2 px-1 text-primary bg-gray rounded-md"
          htmlFor={name}
        >
          {label} {required && <span className="text-important">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="outline outline-accent px-4 py-2 rounded-md text-sm w-full "
        required={required}
        onChange={onChange}
        name={name}
        id={name}
        {...props}
      />
    </div>
  );
}

export default TextInput;
