import { SigninFormData, SignupFormData } from "@/libs/validations/authSchema";
import { StudentLoginData, StudentRegistrationData } from "@/types/auth.types";

export const mapSignupToApi = (
  data: SignupFormData,
): StudentRegistrationData => {
  const nameParts = data.fullname.trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

  return {
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
    guardianName: data.guardianName ?? "",
    guardianPhoneNumber: data.guardianNumber ?? "",
    dateOfBirth: "2000-10-10",
    religion: "Christian",
  };
};

export const mapLogin = (data: SigninFormData): StudentLoginData => {
  return {
    email: data.email,
    password: data.password,
  };
};
