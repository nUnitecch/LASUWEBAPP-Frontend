import { loginStudent, registerStudent } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useStudentRegistration = () => {
  const { login } = useStudentLogin();

  const { isPending, mutate: register } = useMutation({
    mutationFn: registerStudent,
    onSuccess: (_, registrationData) => {
      toast.success("Account created successfully!");
      login({
        email: registrationData.credentials.email,
        password: registrationData.credentials.password,
      });
    },
    onError: (error: any) => {
      toast.error(error.message || "Registration failed. Try again.");
    },
  });

  return { isPending, register };
};

export const useStudentLogin = () => {
  const router = useRouter();

  const { isPending, mutate: login } = useMutation({
    mutationFn: loginStudent,
    onSuccess: () => {
      toast.success("Login successfully!");
      router.push("/dashboard");
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  return { isPending, login };
};
