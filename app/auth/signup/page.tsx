"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import FormField from "@/components/Forms/FormField";
import { Button } from "@/components/ui/button";
import FormSelect from "@/components/Forms/FormSelect";
import {
  campusOptions,
  departmentOptions,
  facultyOptions,
  genderOptions,
  levelOptions,
  SignupFormData,
  signupSchema,
} from "@/lib/schemas/authSchema";
import { FormProvider, useForm } from "react-hook-form";
import { mapSignupToApi } from "@/lib/api/mapper";
import { useStudentRegistration } from "@/hooks/useAuth";
import { currentStepFields } from "@/constants/signupFields";

export default function SignupPage() {
  const [steps, setSteps] = useState(1);
  const methods = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    shouldUnregister: false,
    defaultValues: {
      fullname: "",
      email: "",
      gender: "",
      matricNo: "",
      campus: "",
      faculty: "",
      department: "",
      level: "",
      whatsappNumber: "",
      callingNumber: "",
      address: "",
      guidanceName: "",
      guidanceNumber: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const { handleSubmit } = methods;

  const next = async () => {
    const fields = currentStepFields[steps as keyof typeof currentStepFields];
    const valid = await methods.trigger(fields);
    if (valid) setSteps((prev) => Math.min(prev + 1, 4));
  };

  const previous = () => {
    if (steps > 1) setSteps(steps - 1);
  };

  const { isPending, register } = useStudentRegistration();

  const onSubmit = (data: SignupFormData) => {
    const apiPayload = mapSignupToApi(data);
    register(apiPayload);
  };

  return (
    <div className="w-[95%] mx-auto">
      <div className="text-center">
        <div className="flex justify-center mb-5">
          <div className="border size-15 rounded-full p-2 btn-primary">
            <GraduationCap className="size-full" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold my-3">Create Account</h1>
        <div className="flex justify-center gap-2 my-8 px-4">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-full h-1 rounded-full transition-colors ${
                steps >= step ? "btn-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <FormProvider {...methods}>
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
          <>
            {steps === 1 && (
              <div className="fields flex flex-col gap-5 mb-5">
                <FormField
                  label="Fullname"
                  type="text"
                  name="fullname"
                  placeholder="John Doe"
                  required
                />
                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  required
                />
                <FormSelect
                  placeholder="Select your gender"
                  label="Gender"
                  groupLabel="Genders"
                  name="gender"
                  options={genderOptions}
                  required
                />
              </div>
            )}
            {steps === 2 && (
              <div className="fields flex flex-col gap-3 mb-5">
                <FormField
                  label="Matric Number"
                  type="number"
                  name="matricNo"
                  placeholder="e.g 220673278"
                  required
                />
                <FormSelect
                  label="Campus"
                  groupLabel="Campuses"
                  name="campus"
                  placeholder="Select Campus"
                  options={campusOptions}
                  required
                />
                <FormSelect
                  label="Faculty"
                  groupLabel="Faculties"
                  name="faculty"
                  placeholder="Select Faculty"
                  options={facultyOptions}
                  required
                />
                <FormSelect
                  label="Department"
                  groupLabel="Departments"
                  name="department"
                  placeholder="Select Department"
                  options={departmentOptions}
                  required
                />
                <FormSelect
                  label="Level"
                  groupLabel="Levels"
                  name="level"
                  placeholder="Select Level"
                  options={levelOptions}
                  required
                />
              </div>
            )}
            {steps === 3 && (
              <div className="fields flex flex-col gap-3 mb-5">
                <FormField
                  label="WhatsApp Number"
                  name="whatsappNumber"
                  type="tel"
                  placeholder="e.g. 08012345678"
                />
                <FormField
                  name="callingNumber"
                  type="tel"
                  label="Calling Number"
                  placeholder="e.g. 08012345678"
                />
                <FormField
                  name="address"
                  type="textarea"
                  label="Address"
                  placeholder="Enter your address"
                  required
                />
                <FormField
                  type="text"
                  name="guidanceName"
                  label="Guidance Name"
                  placeholder="Guardian's name"
                />
                <FormField
                  name="guidanceNumber"
                  type="tel"
                  label="Guidance Number"
                  placeholder="e.g. 08012345678"
                />
              </div>
            )}
            {steps === 4 && (
              <div className="fields flex flex-col gap-3 mb-5">
                <FormField
                  name="username"
                  type="text"
                  label="Username"
                  placeholder="Choose a Username"
                  required
                />
                <FormField
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Create a strong password"
                  required
                />
                <FormField
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Re-type your password"
                  required
                />
              </div>
            )}
          </>
          <div className="flex w-full">
            {steps > 1 && (
              <Button
                type="button"
                className="btn-secondary"
                onClick={previous}
              >
                Prev
              </Button>
            )}
            <Button
              type="button"
              className={`btn-primary ml-auto ${
                steps < 4 ? "block" : "hidden"
              }`}
              onClick={next}
            >
              Next
            </Button>
            <Button
              type="submit"
              className={`btn-primary ml-auto ${
                steps !== 4 ? "hidden" : "block"
              }`}
              disabled={isPending}
            >
              {isPending ? "Create..." : "Submit"}
            </Button>
          </div>
          <p className="text-center">
            Already have an account? <Link href="/auth/signin">Sign in</Link>
          </p>
        </form>
      </FormProvider>
    </div>
  );
}
