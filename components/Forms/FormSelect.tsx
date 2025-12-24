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
  return (
    <div>
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>
      <Select>
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
      <input type="hidden" name={name} />
    </div>
  );
}
