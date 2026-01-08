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

export const currentStepFields = {
  1: ["fullname", "email", "gender"],
  2: ["matricNo", "campus", "faculty", "department", "level"],
  3: [
    "whatsappNumber",
    "callingNumber",
    "address",
    "guardianName",
    "guardianNumber",
  ],
  4: ["username", "password", "confirmPassword"],
} as const;

export const stepsDescriptions = ["P", "A", "C", "A"];
