"use client";

import FormField from "@/components/Forms/FormField";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { KeyRound } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function PasswordResetPage() {
  const [isOTP, setIsOTP] = useState(true);
  const methods = useForm({ defaultValues: {} });

  function handleRequestOTP(e: any) {
    e.preventDefault();
    setIsOTP(false);
  }
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
      {isOTP ? (
        <FormProvider {...methods}>
          <form className="p-4" onSubmit={handleRequestOTP}>
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
      ) : (
        <FormProvider {...methods}>
          <form className="p-4">
            <div className="mb-5 flex justify-center">
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="flex justify-center">
              <Button className="btn-secondary">Reset Password</Button>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
}
