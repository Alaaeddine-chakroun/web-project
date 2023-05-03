import StudentGridItem from "@/components/StudentGridItem";
import { useStudentsQuery } from "@/hooks/queries/useStudentsQuery";
import Link from "next/link";

function DashboardPage() {
  const { data, isLoading } = useStudentsQuery();
  return (
    <div>
      <section className="min-h-[600px] grid place-items-center">
        <h1 className="text-7xl font-bold">Dashboard</h1>
      </section>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold">Liste des etudiants</h2>
        <div className="grid grid-cols-3 gap-4">
          {data?.map((student) => (
            <StudentGridItem key={student._id} student={student} />
          ))}
        </div>
        <Link href="/dashboard/add">Ajouter un etudiant</Link>
      </div>
    </div>
  );
}

export default DashboardPage;
