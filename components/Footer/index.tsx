import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col text-white bg-black p-4 min-h-[200px]">
      <p className="mt-auto text-center font-extralight">
        <b>
          Made with <span className="text-red-500">♥</span> by{" "}
        </b>
        <Link
          className="underline"
          href="https://www.linkedin.com/in/hentati-mohamed-bechir-361354172/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mohammed Bechir Hentati{" "}
        </Link>{" "}
        <b>et </b>
        <Link
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/alaaeddine-chakroun/"
        >
          Alaaeddine Chakroun
        </Link>
      </p>
      <p className="text-center">MPSRT 1</p>
    </footer>
  );
}

export default Footer;
