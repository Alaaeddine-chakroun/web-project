import { QueryKeys } from "@/constants/queryKeys";
import { addStudent, deleteStudent } from "@/services/student";
import { useMutation, useQueryClient } from "react-query";

export function useStudentMutations() {
  const queryClient = useQueryClient();

  const addStudentMutation = useMutation({
    mutationFn: addStudent,
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.STUDENTS);
    },
  });

  const deleteStudentMutation = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.STUDENTS);
    },
  });

  return {
    addStudentMutation,
    deleteStudentMutation,
  };
}
