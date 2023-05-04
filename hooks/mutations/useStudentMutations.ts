import { QueryKeys } from "@/constants/queryKeys";
import { addStudent, deleteStudent } from "@/services/student";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

export function useStudentMutations() {
  const queryClient = useQueryClient();

  const addStudentMutation = useMutation({
    mutationFn: addStudent,
    onSuccess: () => {
      toast.success("Etudiant ajouté avec succès");
      queryClient.invalidateQueries(QueryKeys.STUDENTS);
    },
  });

  const deleteStudentMutation = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      toast.success("Etudiant supprimé avec succès");
      queryClient.invalidateQueries(QueryKeys.STUDENTS);
    },
  });

  return {
    addStudentMutation,
    deleteStudentMutation,
  };
}
