import { useQuery } from "@tanstack/react-query";
import { fetchStudentInfo } from "@/apis/studentApi";

export function useStudentInfo() {
  return useQuery({
    queryKey: ["student-info"],
    queryFn: fetchStudentInfo,
    enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
    retry: false,
  });
}
