import { useQuery } from "@tanstack/react-query";
import { fetchStudentInfo } from "@/apis/studentApi";

export function useStudentInfo() {
  return useQuery({
    queryKey: ["student-info"],
    queryFn: fetchStudentInfo,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
}
