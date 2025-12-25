"use client";

import { useState } from "react";
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
} from "@/lib/schemas/authSchema";
import { FormProvider, useForm } from "react-hook-form";

export default function SignupPage() {
  const [steps, setSteps] = useState(1);
  const methods = useForm<SignupFormData>({
    defaultValues: {
      fullname: "",
      email: "",
      gender: "",
      username: "",
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
      password: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const next = () => {
    console.log(steps);

    if (steps < 4) setSteps(steps + 1);
  };

  const previous = () => {
    if (steps > 1) setSteps(steps - 1);
  };

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="w-[95%]">
      <div className="text-center">
        <div className="flex justify-center mb-5">
          <div className="border size-15 rounded-full p-2 btn-primary">
            <GraduationCap className="size-full" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold my-3">Create Account</h1>
      </div>
      <FormProvider {...methods}>
        <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
          <>
            {steps === 1 && (
              <div className="fields flex flex-col gap-5 mb-5">
                <FormField
                  label="Fullname"
                  type="text"
                  name="fullname"
                  placeholder="John Doe"
                />
                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="johndoe@example.com"
                />
                <FormSelect
                  placeholder="Select your gender"
                  label="Gender"
                  groupLabel="Genders"
                  name="gender"
                  options={genderOptions}
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
                />
                <FormSelect
                  label="Campus"
                  groupLabel="Campuses"
                  name="campus"
                  placeholder="Select Campus"
                  options={campusOptions}
                />
                <FormSelect
                  label="Faculty"
                  groupLabel="Faculties"
                  name="faculty"
                  placeholder="Select Faculty"
                  options={facultyOptions}
                />
                <FormSelect
                  label="Department"
                  groupLabel="Departments"
                  name="department"
                  placeholder="Select Department"
                  options={departmentOptions}
                />
                <FormSelect
                  label="Level"
                  groupLabel="Levels"
                  name="level"
                  placeholder="Select Level"
                  options={levelOptions}
                />
              </div>
            )}
            {steps === 3 && (
              <div className="fields flex flex-col gap-3 mb-5">
                <FormField
                  name="whatsappNumber"
                  type="tel"
                  label="WhatsApp Number"
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
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter password"
                />
                <FormField
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm password"
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
              type={steps < 4 ? "button" : "submit"}
              className="btn-primary ml-auto"
              onClick={steps < 4 ? next : onSubmit}
            >
              {steps < 4 ? "Next" : isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            {/* <div className="w-full">
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
                disabled={isSubmitting}
              >
                {isSubmitting ? "Create..." : "Submit"}
              </Button>
            </div> */}
          </div>
          <p className="text-center">
            Already have an account? <Link href="/auth/signin">Sign in</Link>
          </p>
        </form>
      </FormProvider>
    </div>
  );
}
