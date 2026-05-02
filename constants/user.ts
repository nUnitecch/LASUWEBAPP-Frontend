export interface Student {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "guest" | "user";
}
