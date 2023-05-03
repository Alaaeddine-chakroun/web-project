import { StudentType, StudentToSubmit } from "@/types/student";
import api from ".";

export async function addStudent(student: StudentToSubmit) {
  const response = await api.post<{ message: string }>(`/students`, student);
  return response.data;
}

export async function getStudents() {
  const response = await api.get<StudentType[]>(`/students`);
  return response.data;
}

export async function deleteStudent(id: string) {
  const response = await api.delete<{ message: string }>(`/students/${id}`);
  return response.data;
}
