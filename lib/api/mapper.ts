import { SigninFormData, SignupFormData } from "@/lib/schemas/authSchema";
import { RegisterStudentParams, StudentLoginParams } from "@/types/auth.types";

export const mapSignupToApi = (data: SignupFormData): RegisterStudentParams => {
  const nameParts = data.fullname.trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

  return {
    credentials: {
      firstName,
      lastName,
      email: data.email,
      username: data.username,
      password: data.password,
      matricNumber: data.matricNo,
      campus: data.campus,
      faculty: data.faculty,
      department: data.department,
      level: data.level,
      gender: data.gender,
      whatsappNumber: data.whatsappNumber ?? "",
      callingNumber: data.callingNumber,
      address: data.address,
      guardianName: data.guidanceName ?? "",
      guardianPhoneNumber: data.guidanceNumber ?? "",
      dateOfBirth: "Not specified",
      religion: "Not specified",
    },
  };
};

export const mapLogin = (data: SigninFormData): StudentLoginParams => {
  return {
    credentials: {
      email: data.email,
      password: data.password,
    },
  };
};
