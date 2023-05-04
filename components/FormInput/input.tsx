import clsx from "clsx";
import React from "react";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  name: string;
  required?: boolean;
  inputClassName?: string;
};

function FormInput({
  inputClassName,
  required = true,
  label,
  placeholder,
  type = "text",
  className = "",
  name,
}: FormInputProps) {
  const { register } = useFormContext();
  return (
    <div className={`${className} flex flex-col`}>
      {label && (
        <label htmlFor={name} className="mb-1 text-sm font-semibold">
          {label}
        </label>
      )}
      {React.createElement(type === "textarea" ? "textarea" : "input", {
        className: clsx("border rounded-md p-2", inputClassName),
        placeholder: placeholder ?? label,
        type,
        ...register(name, { required }),
      })}
    </div>
  );
}

export default FormInput;
