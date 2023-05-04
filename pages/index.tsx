import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>École de l'Excellence</title>
      </Head>
      <div>
        <section className="px-8 md:px-8 text-white bg-cover bg-center min-h-[600px] grid place-items-center bg-[linear-gradient(to_top,_black,#00000045),url('/images/hero.jpg')]">
          <h1 className="md:text-7xl text-5xl font-bold">
            École de l'Excellence
          </h1>
        </section>
        <div className="px-8 md:px-0 container mx-auto mt-8 space-y-28">
          <section className="text-center space-y-4 flex flex-col">
            <h2 className="font-semibold text-4xl">
              Apprendre et grandir ensemble à École de l'Excellence.
            </h2>
            <p className="font-light max-w-6xl self-center">
              Notre école est bien plus qu'un lieu d'apprentissage. C'est une
              communauté éducative engagée dans la réussite académique,
              personnelle et sociale de votre enfant. Nous sommes une équipe de
              professionnels bienveillants qui veillent à l'épanouissement et au
              développement global de votre enfant. Nous encourageons la
              créativité, la curiosité et la prise d'initiative chez nos élèves,
              tout en valorisant l'expression de la diversité et la tolérance
              entre eux. Notre approche pédagogique s'appuie sur un
              accompagnement personnalisé et adapté aux besoins de chaque élève
              pour favoriser sa réussite, tout en veillant à son bien-être.
              Rejoignez-nous pour une expérience éducative inoubliable !
            </p>
          </section>
          <section className="grid md:grid-cols-5 gap-8 ">
            <figure className="md:col-span-2 relative min-h-[300px] ">
              <Image
                fill
                className="rounded-md object-cover shadow-lg"
                src="/images/home-1.jpg"
                alt="teacher"
              />
            </figure>
            <div className="md:col-span-3 flex flex-col justify-center">
              <h3 className="text-4xl font-bold">Des formations sur mesure</h3>
              <p className="font-light">
                Une équipe pédagogique à l'écoute des besoins de chaque élève
                pour une réussite personnalisée.
              </p>
            </div>
          </section>
          <section className="grid md:grid-cols-5 gap-8">
            <div className="items-end md:col-span-3 flex flex-col justify-center">
              <h3 className="text-4xl font-bold">Nos domaines d'expertise</h3>
              <p className="font-light">
                Une offre de formations diversifiée et de qualité pour répondre
                à tous les besoins éducatifs.
              </p>
            </div>
            <figure className="md:col-span-2 relative min-h-[300px] ">
              <Image
                fill
                className="rounded-md object-cover object-top shadow-lg"
                src="/images/home-2.jpg"
                alt="teacher"
              />
            </figure>
          </section>
        </div>
        <section className="text-center bg-black text-white flex flex-col py-20 mt-8">
          <h2 className="font-semibold mb-4 text-xl">
            Notre équipe se fera un plaisir de répondre à toutes vos questions,
            alors contactez-nous dès maintenant !
          </h2>
          <ButtonLink
            title="Contactez-nous"
            href="/contact"
            className="bg-white hover:bg-gray-300 text-black text-xl mx-auto"
          />
        </section>
      </div>
    </>
  );
}

export default HomePage;
