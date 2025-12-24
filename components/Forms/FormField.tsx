interface FormFieldProps {
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

export default function FormField({
  name,
  type,
  placeholder,
  label,
}: FormFieldProps) {
  return (
    <div className="inputField">
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <input
        type={type || "text"}
        id={name}
        name={name}
        placeholder={placeholder}
        className="border w-full h-10 rounded px-2"
      />
    </div>
  );
}
