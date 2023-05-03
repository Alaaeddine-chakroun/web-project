import { useStudentMutations } from "@/hooks/mutations/useStudentMutations";
import { StudentType } from "@/types/student";

type StudentGridItemProps = {
  className?: string;
  student: StudentType;
};

function StudentGridItem({ className = "", student }: StudentGridItemProps) {
  const { deleteStudentMutation } = useStudentMutations();

  return (
    <div className={`bg-white shadow-md rounded-md p-4 ${className}`}>
      <h3 className="text-2xl font-bold">
        {student.firstname} {student.lastname}
      </h3>
      <p className="text-lg">{student.age} ans</p>
      <p className="text-lg">{student.class}</p>
      <button onClick={() => deleteStudentMutation.mutate(student._id)}>
        Effacer
      </button>
    </div>
  );
}

export default StudentGridItem;
