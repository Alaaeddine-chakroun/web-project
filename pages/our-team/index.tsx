import TeacherGridItem from "@/components/TeacherGridItem";
import { teachersData } from "@/constants/teachersData";
import Head from "next/head";

function OurTeamPage() {
  return (
    <>
      <Head>
        <title>Notre équipe</title>
      </Head>
      <div className="container mx-auto">
        <div className="my-7 text-center">
          <h1 className="text-7xl font-bold">Notre équipe</h1>
          <p className="font-light my-2">
            Des professionnels engagés et bienveillants pour accompagner vos
            enfants tout au long de leur parcours scolaire.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {teachersData.map((teacher) => (
              <TeacherGridItem key={teacher._id} teacher={teacher} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeamPage;
