import { useStudentMutations } from "@/hooks/mutations/useStudentMutations";
import { useForm } from "react-hook-form";
import { StudentToSubmit } from "@/types/student";
import { useRouter } from "next/router";

function AddStudentPage() {
  const {
    addStudentMutation: { mutate },
  } = useStudentMutations();
  const formMethods = useForm<StudentToSubmit>();
  const router = useRouter();

  function handleSubmit(data: StudentToSubmit) {
    mutate(data, {
      onSuccess: () => {
        router.push("/dashboard");
      },
    });
  }

  return (
    <form
      className="bg-black"
      onSubmit={formMethods.handleSubmit(handleSubmit)}
    >
      <input
        className="block"
        type="text"
        {...formMethods.register("firstname", { required: true })}
      />
      <input
        className="block"
        type="text"
        {...formMethods.register("lastname", { required: true })}
      />
      <input
        className="block"
        type="number"
        {...formMethods.register("age", { required: true })}
      />
      <input
        className="block"
        type="text"
        {...formMethods.register("class", { required: true })}
      />
      <button className="text-white" type="submit">
        Ajouter
      </button>
    </form>
  );
}

export default AddStudentPage;
