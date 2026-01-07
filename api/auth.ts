import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE as string;

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

type StudentLoginData = {
  email: string;
  password: string;
};

interface RegisterStudentParams {
  credentials: StudentRegistrationData;
}

interface StudentLoginParams {
  credentials: StudentLoginData;
}

async function registerStudent({
  credentials,
}: RegisterStudentParams): Promise<void> {
  try {
    const response = await axios.post(
      `${API_BASE}/student/register`,
      credentials,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Registration successful:", response.data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      throw new Error(error.response?.data?.message || "Registration failed");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
}

async function loginStudent({ credentials }: StudentLoginParams) {
  try {
    const response = await axios.post(
      `${API_BASE}/student/login`,
      credentials,
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    );
    console.log("Student Logged in successfully", response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Login failed:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Login failed");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
}

export { registerStudent, loginStudent };

// const studentData: StudentRegistrationData = {
//   firstName: "Hertz",
//   lastName: "Freud",
//   email: "hertz.freud@student.edu.ng",
//   dateOfBirth: "2000-10-10",
//   matricNumber: "2023/041",
//   campus: "ojo",
//   faculty: "Engineering",
//   department: "Mathematics",
//   level: "300",
//   gender: "male",
//   whatsappNumber: "+2348012345678",
//   callingNumber: "+2348012345678",
//   address: "123 University Road, Lagos",
//   religion: "Christian",
//   guardianName: "Janet Freud",
//   guardianPhoneNumber: "+2348098765432",
//   username: "hertziv",
//   password: "securePassword123!",
// };
