import clsx from "clsx";

type ButtonProps = {
  className?: string;
  title: string;
  onClick?: () => void;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
};

function Button({ type, className, title, onClick, isLoading }: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        className,
        "bg-black transition-colors hover:bg-gray-700 text-white py-2 px-4 rounded",
        {
          "opacity-50 cursor-not-allowed": isLoading,
        }
      )}
      onClick={onClick}
    >
      {isLoading ? "Chargement .." : title}
    </button>
  );
}

export default Button;
