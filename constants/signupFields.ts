export const currentStepFields = {
  1: ["fullname", "email", "gender"],
  2: ["matricNo", "campus", "faculty", "department", "level"],
  3: [
    "whatsappNumber",
    "callingNumber",
    "address",
    "guidanceName",
    "guidanceNumber",
  ],
  4: ["username", "password", "confirmPassword"],
} as const;

export const stepsDescriptions = ["P", "A", "C", "A"];
