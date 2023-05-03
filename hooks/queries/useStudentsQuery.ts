import { QueryKeys } from "@/constants/queryKeys";
import { getStudents } from "@/services/student";
import { useQuery } from "react-query";

export function useStudentsQuery() {
  return useQuery(QueryKeys.STUDENTS, getStudents);
}
