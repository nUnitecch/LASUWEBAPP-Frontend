import { z } from "zod";

export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const campusOptions = [
  { value: "ojo", label: "Ojo campus (main)" },
  { value: "epe", label: "Epe campus" },
  { value: "ikeja", label: "Ikeja campus" },
];

export const facultyOptions = [
  { value: "sci", label: "Science" },
  { value: "edu", label: "Education" },
  { value: "mass", label: "Mass communication" },
  { value: "art", label: "Art" },
  { value: "fms", label: "Management Science" },
  { value: "fss", label: "Social Science" },
];

export const departmentOptions = [
  { value: "csc", label: "Comp Science" },
  { value: "math", label: "Mathematics" },
  { value: "chem", label: "Chemistry" },
  { value: "bio", label: "Biology" },
  { value: "eng", label: "English" },
  { value: "acc", label: "Accounting" },
];

export const levelOptions = [
  { value: "100", label: "100L" },
  { value: "200", label: "200L" },
  { value: "300", label: "300L" },
  { value: "400", label: "400L" },
  { value: "500", label: "500L" },
];

export const signupSchema = z
  .object({
    fullname: z.string().min(2, "Fullname too short"),
    email: z.email("Invalid email"),
    gender: z.string().min(1, "Select gender"),
    username: z.string().min(3, "Username too short"),
    matricNo: z.string().min(5, "Invalid matric number"),
    campus: z.string().min(1, "Select campus"),
    faculty: z.string().min(1, "Select faculty"),
    department: z.string().min(1, "Select department"),
    level: z.string().min(1, "Select level"),
    callingNumber: z.string().min(10, "Invalid calling number"),
    address: z.string().min(10, "Address too short"),
    guidanceName: z
      .string()
      .min(2)
      .optional()
      .refine((val) => !val || val.length >= 2, {
        message: "Guardian name too short",
      }),
    guidanceNumber: z.string().min(10).optional(),
    whatsappNumber: z.string().optional(),
    password: z
      .string()
      .min(8, "Password too short")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        "Must include uppercase, lowercase, number"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signinSchema = z.object({
  email: z.email("Invalid email"),
  password: z
    .string()
    .min(8, "Password too short")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Must include uppercase, lowercase, number"
    ),
});

export type SignupFormData = z.infer<typeof signupSchema>;
export type SigninFormData = z.infer<typeof signinSchema>;
