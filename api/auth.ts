import { RegisterStudentParams, StudentLoginParams } from "@/types/auth.types";
import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE as string;

async function registerStudent(
  credentials: RegisterStudentParams
): Promise<void> {
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

async function loginStudent(credentials: StudentLoginParams) {
  try {
    const response = await axios.post(
      `${API_BASE}/student/login`,
      credentials,
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    );
    console.log("Login successful", response.data);

    return response.data;
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
