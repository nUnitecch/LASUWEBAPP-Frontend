import FormField from "@/components/Forms/FormField";
import { KeyRound } from "lucide-react";
import Link from "next/link";

export default function PasswordResetPage() {
  return (
    <div className="w-[95%]">
      <div className="text-center">
        <div className="flex justify-center mb-5">
          <div className="border size-15 rounded-full p-2 btn-primary">
            <KeyRound className="size-full" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold my-3">Sign in</h1>
        <p className="text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <form className="m-5">
        <div className="fields flex flex-col gap-3 mb-5">
          <FormField name="username" label="Username" placeholder="JohnDoe" />
        </div>
        <Link href="/auth/signup">Sign up</Link>
      </form>
    </div>
  );
}
