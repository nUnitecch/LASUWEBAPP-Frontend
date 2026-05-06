import axios from "axios";
import { BASE_API } from "./authApi";
import Cookies from "js-cookie";

async function fetchStudentInfo() {
  const token = Cookies.get("token");
  if (!token) throw new Error("Unauthorized");

  const response = await axios.get(`${BASE_API}/api/v1/student/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export { fetchStudentInfo };
