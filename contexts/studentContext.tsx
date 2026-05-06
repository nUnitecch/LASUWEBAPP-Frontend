"use client";
import React, { createContext, useContext } from "react";
import { useStudentInfo } from "@/hooks/useStudent";
import { StudentType } from "@/types/student.type";

interface StudentContextType {
  studentData: StudentType | null;
  isLoading: boolean;
  isError: boolean;
}

const StudentContext = createContext<StudentContextType | null>(null);

export function StudentProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading, isError } = useStudentInfo();
  const studentData = data?.data || null;

  return (
    <StudentContext.Provider
      value={{
        studentData,
        isLoading,
        isError,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudentData() {
  const context = useContext(StudentContext);
  if (!context)
    throw new Error("useStudentData must be used within StudentProvider");

  return context;
}
