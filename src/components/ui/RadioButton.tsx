interface props {
  label: string;
  onChange?: () => void;
  name: string;
}
function RadioButton({ label, onChange, name, ...props }: props) {
  const id = `${name}-${label}`.toLowerCase();
  return (
    <div>
      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
        <input
          id={id}
          type="radio"
          className="peer hidden"
          onChange={onChange}
          name={name}
          {...props}
        />
        <div className="h-5 w-5 border-2 border-white ring-2 ring-primary rounded-full peer-checked:bg-primary transition-colors" />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default RadioButton;
