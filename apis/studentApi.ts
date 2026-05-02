import axios from "axios";
import { BASE_API } from "./authApi";

async function fetchStudentInfo() {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${BASE_API}/api/v1/student/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Unauthorized");
  }
}

export { fetchStudentInfo };
