"use client";

import FormField from "@/components/Forms/FormField";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRound } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SigninFormData, signinSchema } from "@/lib/schemas/authSchema";
import { useStudentLogin } from "@/hooks/useAuth";
import { StudentLoginData } from "@/types/auth.types";

export default function LoginPage() {
  const methods = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit } = methods;
  const { isPending, login } = useStudentLogin();

  const onSubmit = (data: StudentLoginData) => {
    login(data);
  };

  return (
    <div className="w-[95%] mx-auto">
      <div className="text-center">
        <div className="flex justify-center mb-5">
          <div className="border size-15 rounded-full p-2 btn-primary">
            <UserRound className="size-full" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold my-3">Sign in</h1>
        <p className="text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <FormProvider {...methods}>
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="fields flex flex-col gap-3 mb-5">
            <FormField
              name="email"
              label="Email"
              placeholder="Johndoe@example.com"
              required
            />
            <FormField
              name="password"
              type="password"
              label="Password"
              placeholder="Enter password"
              required
            />
            <Link
              className="text-logo-title text-[14px] mb-3"
              href="/auth/reset-password"
            >
              Forgotten password?
            </Link>
            <Button type="submit" className="btn-primary mx-auto">
              {isPending ? "Signing in..." : "Sign in"}
            </Button>
          </div>
          <p className="text-center">
            Don't have an account ? <Link href="/auth/signup">Sign up</Link>
          </p>
        </form>
      </FormProvider>
    </div>
  );
}
