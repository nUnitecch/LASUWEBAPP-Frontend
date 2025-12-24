interface FormFieldProps {
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

export default function FormField({
  name,
  type = "text",
  placeholder,
  label,
}: FormFieldProps) {
  return (
    <div className="inputField">
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          placeholder={placeholder}
          className="border w-full rounded px-2 min-h-15"
        ></textarea>
      ) : (
        <input
          type={type || "text"}
          id={name}
          name={name}
          placeholder={placeholder}
          className="border w-full h-10 rounded px-2"
        />
      )}
    </div>
  );
}
