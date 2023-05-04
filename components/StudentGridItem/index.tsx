import { useStudentMutations } from "@/hooks/mutations/useStudentMutations";
import { StudentType } from "@/types/student";
import Button from "../Button";

type StudentGridItemProps = {
  className?: string;
  student: StudentType;
};

function StudentGridItem({ className = "", student }: StudentGridItemProps) {
  const { deleteStudentMutation } = useStudentMutations();

  return (
    <div
      className={`bg-white shadow-md rounded-md p-4 flex flex-col ${className}`}
    >
      <h3 className="text-2xl font-bold">
        {student.firstname} {student.lastname}
      </h3>
      <p className="text-sm font-light text-gray-700">{student.age} ans</p>
      <p className="text-lg">
        <b>Classe : </b>
        {student.class}
      </p>
      <Button
        title="Effacer"
        onClick={() => deleteStudentMutation.mutate(student._id)}
        className="bg-red-500 hover:bg-red-700 text-sm font-semibold self-end"
      />
    </div>
  );
}

export default StudentGridItem;
