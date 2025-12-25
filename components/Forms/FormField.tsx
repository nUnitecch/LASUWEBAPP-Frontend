"use client";

import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  label: string;
}

export default function FormField({
  name,
  type = "text",
  placeholder,
  label,
}: FormFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string;

  return (
    <div className="inputField">
      <label htmlFor={name} className="block mb-1 text-[14px]">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          placeholder={placeholder}
          className="border w-full rounded p-2 min-h-20"
          {...register(name)}
        ></textarea>
      ) : (
        <input
          type={type || "text"}
          id={name}
          placeholder={placeholder}
          className="border w-full h-10 rounded px-2"
          {...register(name)}
        />
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
