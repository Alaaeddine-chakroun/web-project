import ButtonLink from "@/components/ButtonLink";
import StudentGridItem from "@/components/StudentGridItem";
import { QueryKeys } from "@/constants/queryKeys";
import { useStudentsQuery } from "@/hooks/queries/useStudentsQuery";
import { getStudents } from "@/services/student";
import Head from "next/head";
import { QueryClient, dehydrate } from "react-query";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QueryKeys.STUDENTS], getStudents);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function DashboardPage() {
  const { data } = useStudentsQuery();
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="space-y-4 container flex flex-col mx-auto">
        <h1 className="text-7xl my-7 font-bold">Dashboard</h1>
        <ButtonLink
          className="block self-start"
          title="Ajouter un etudiant"
          href="/dashboard/add"
        />
        <h2 className="text-4xl font-bold">Liste des etudiants</h2>
        {data?.length ? (
          <div className="grid md:grid-cols-3 gap-4">
            {data.map((student) => (
              <StudentGridItem key={student._id} student={student} />
            ))}
          </div>
        ) : (
          <p className="text-2xl text-center">Aucun étudiant</p>
        )}
      </div>
    </>
  );
}

export default DashboardPage;
