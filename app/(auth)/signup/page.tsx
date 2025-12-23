import { UserRound } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Signup() {
  return (
    <div className="border w-[95%]">
      <div className="text-center">
        <div className="flex justify-center mb-5">
          <div className="border size-15 rounded-full p-2 btn-primary">
            <UserRound className="size-full" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold my-3">Create Account</h1>
      </div>
      <form className="m-5">
        <div className="fields flex flex-col gap-2.5 mb-5">
          <div className="inputField">
            <label htmlFor="fullname" className="block mb-2">
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="John Doe"
              className="border w-full h-10 rounded px-2"
            />
          </div>
          <div className="inputField">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              className="border w-full h-10 rounded px-2"
            />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Genders</SelectLabel>
                <SelectItem value="m">Male</SelectItem>
                <SelectItem value="f">Female</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p className="text-center">
          Already have an account? <Link href="/signin"></Link>
        </p>
      </form>
    </div>
  );
}
