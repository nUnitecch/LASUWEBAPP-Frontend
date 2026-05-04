"use client";

import { useStudentInfo } from "@/hooks/useStudent";
import { StudentType } from "@/types/student.type";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { createContext, useContext } from "react";

interface StudentContextType {
  studentData: StudentType | null;
  isLoading: boolean;
  logout?: () => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export function StudentProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useStudentInfo();
  const queryClient = useQueryClient();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    queryClient.clear();
    router.push("/auth/signin");
  };

  const studentData = data?.data || null;

  return (
    <StudentContext.Provider
      value={{
        studentData,
        isLoading,
        logout,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudentData() {
  const context = useContext(StudentContext);
  if (!context)
    throw new Error("Auth context must be used within AuthContext Provider!");

  return context;
}
