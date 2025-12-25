"use client";

import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FormSelectProps {
  placeholder: string;
  label: string;
  name: string;
  options: { value: string; label: string }[];
  groupLabel: string;
}

export default function FormSelect({
  placeholder,
  label,
  name,
  options,
  groupLabel,
}: FormSelectProps) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string;

  return (
    <div>
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>
      <Select onValueChange={(value) => setValue(name, value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="w-full">
          <SelectGroup>
            <SelectLabel>{groupLabel}</SelectLabel>
            {options?.map(({ value, label }, id) => (
              <SelectItem key={id} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <input type="hidden" {...register(name)} />
    </div>
  );
}
