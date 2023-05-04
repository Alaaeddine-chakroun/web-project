import { useStudentMutations } from "@/hooks/mutations/useStudentMutations";
import { FormProvider, useForm } from "react-hook-form";
import { StudentToSubmit } from "@/types/student";
import { useRouter } from "next/router";
import FormInput from "@/components/FormInput/input";
import Button from "@/components/Button";

function AddStudentPage() {
  const {
    addStudentMutation: { mutate, isLoading },
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
    <div className="container mx-auto">
      <FormProvider {...formMethods}>
        <h1 className="my-7 text-6xl text-center font-bold">
          Ajouter un étudiant
        </h1>
        <form
          className="rounded p-4 mx-auto shadow-lg grid max-w-3xl space-y-4"
          onSubmit={formMethods.handleSubmit(handleSubmit)}
        >
          <FormInput name="firstname" label="Prénom" />
          <FormInput name="lastname" label="Nom" />
          <FormInput name="age" label="Age" />
          <FormInput name="class" label="Classe" />
          <Button isLoading={isLoading} title="Ajouter" type="submit" />
        </form>
      </FormProvider>
    </div>
  );
}

export default AddStudentPage;
