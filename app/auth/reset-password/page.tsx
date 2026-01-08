"use client";

import FormField from "@/components/Forms/FormField";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";

export default function PasswordResetPage() {
  const methods = useForm({ defaultValues: {} });
  return (
    <div className="w-[95%] mx-auto">
      <div className="text-center mb-10">
        <div className="flex justify-center mb-5">
          <div className="border size-15 rounded-full p-2 btn-primary">
            <KeyRound className="size-full" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold my-3">Reset Password</h1>
        <p className="text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <FormProvider {...methods}>
        <form className="p-4">
          <div className="mb-5">
            <FormField
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex justify-center">
            <Button className="btn-secondary">Request for OTP</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
