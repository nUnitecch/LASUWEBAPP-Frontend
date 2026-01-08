type StudentRegistrationData = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  matricNumber: string;
  campus: string;
  faculty: string;
  department: string;
  level: string;
  gender: string;
  whatsappNumber: string;
  callingNumber: string;
  address: string;
  religion: string;
  guardianName: string;
  guardianPhoneNumber: string;
  username: string;
  password: string;
};

export type StudentLoginData = {
  email: string;
  password: string;
};

export interface RegisterStudentParams {
  credentials: StudentRegistrationData;
}

