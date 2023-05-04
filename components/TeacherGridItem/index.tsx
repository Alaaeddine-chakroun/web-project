import { TeacherType } from "@/types/teacher";
import Image from "next/image";

type TeacherGridItemProps = {
  className?: string;
  teacher: TeacherType;
};

function TeacherGridItem({ className = "", teacher }: TeacherGridItemProps) {
  return (
    <div
      className={`bg-white shadow-md rounded-md p-4 flex flex-col ${className}`}
    >
      <div className="flex gap-3">
        <figure className="relative w-16 h-16">
          <Image
            src={teacher.avatar}
            alt={teacher.firstname}
            fill
            className="object-cover rounded-full"
          />
        </figure>
        <div className="text-left">
          <h3 className="text-2xl font-bold">
            {teacher.firstname} {teacher.lastname}
          </h3>
          <p className="text-sm font-light text-gray-700">{teacher.email}</p>
        </div>
      </div>
      <p className="text-lg font-semibold">{teacher.occupation}</p>
    </div>
  );
}

export default TeacherGridItem;
