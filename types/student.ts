export interface StudentType {
  _id: string;
  firstname: string;
  lastname: string;
  class: string;
  age: number;
  createdAt: string;
  updatedAt: string;
}

export type StudentToSubmit = Omit<
  StudentType,
  "_id" | "createdAt" | "updatedAt"
>;
