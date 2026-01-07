"use client";

import { Controller, useFormContext } from "react-hook-form";
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
  required?: boolean;
}

export default function FormSelect({
  placeholder,
  label,
  name,
  options,
  groupLabel,
  required = false,
}: FormSelectProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={name} className="block mb-1">
        {label}
        {required && " *"}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? "This field is required" : false }}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="w-full">
              <SelectGroup>
                <SelectLabel>{groupLabel}</SelectLabel>
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
}
