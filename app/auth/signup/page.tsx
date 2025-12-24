"use client";

import { useState } from "react";
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
import FormField from "@/components/Forms/FormField";
import { Button } from "@/components/ui/button";

export default function Signup() {
  const [steps, setSteps] = useState(1);

  const next = () => {
    if (steps < 2) setSteps(steps + 1);
  };
  
  const prev = () => {
    if (steps > 1) setSteps(steps - 1);
  };

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
        <div className="">
          {steps === 1 && (
            <div className="fields flex flex-col gap-2.5 mb-5">
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
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Genders</SelectLabel>
                    <SelectItem value="m">Male</SelectItem>
                    <SelectItem value="f">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
          {steps === 2 && (
            <div className="fields flex flex-col gap-2.5 mb-5">
              <FormField
                label="Matric Number"
                type="number"
                name="matricNo"
                placeholder="e.g 220673278"
              />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Campus" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Campuses</SelectLabel>
                    <SelectItem value="ojo" aria-selected>
                      Ojo campus (main)
                    </SelectItem>
                    <SelectItem value="epe">Epe campus</SelectItem>
                    <SelectItem value="ikeja">Ikeja campus</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Faculty" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Faculties</SelectLabel>
                    <SelectItem value="sci">Science</SelectItem>
                    <SelectItem value="edu">Education</SelectItem>
                    <SelectItem value="mass">Mass communication</SelectItem>
                    <SelectItem value="art">Art</SelectItem>
                    <SelectItem value="fms">Management Science</SelectItem>
                    <SelectItem value="fss">Social Science</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Departments</SelectLabel>
                    <SelectItem value="csc">comp science</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="chem">Chemistry</SelectItem>
                    <SelectItem value="bio">Biology</SelectItem>
                    <SelectItem value="eng">English</SelectItem>
                    <SelectItem value="acc">Accounting</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Levels</SelectLabel>
                    <SelectItem value="100">100L</SelectItem>
                    <SelectItem value="200">200L</SelectItem>
                    <SelectItem value="300">300L</SelectItem>
                    <SelectItem value="400">400L</SelectItem>
                    <SelectItem value="500">500L</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        <div className="flex w-full">
          {steps > 1 && (
            <Button className="btn-secondary" onClick={prev}>
              Prev
            </Button>
          )}
          <Button className="btn-primary ml-auto" onClick={next}>
            Next
          </Button>
        </div>
        <p className="text-center">
          Already have an account? <Link href="/signin"></Link>
        </p>
      </form>
    </div>
  );
}
