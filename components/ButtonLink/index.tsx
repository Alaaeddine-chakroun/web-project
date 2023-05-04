import clsx from "clsx";
import Link from "next/link";

type ButtonLinkProps = {
  className?: string;
  title: string;
  href: string;
};

function ButtonLink({ href, className, title }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        "bg-black transition-colors hover:bg-gray-700 text-white py-2 px-4 rounded"
      )}
    >
      {title}
    </Link>
  );
}

export default ButtonLink;
