import Button from "@/components/Button";
import FormInput from "@/components/FormInput/input";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

function ContactPage() {
  const formMethods = useForm();
  const router = useRouter();
  function handleSubmit() {
    router.push("/");
  }
  return (
    <div className="container mx-auto">
      <div className="my-7 text-center">
        <h1 className="text-7xl font-bold">Contact</h1>
        <p className="font-light my-2">
          Nous sommes là pour vous aider, n'hésitez pas à nous contacter !
        </p>
      </div>
      <FormProvider {...formMethods}>
        <form
          className="rounded p-4 mx-auto shadow-lg grid max-w-3xl space-y-4"
          onSubmit={formMethods.handleSubmit(handleSubmit)}
        >
          <div className="flex gap-3">
            <FormInput className="flex-1" name="firstname" label="Prénom" />
            <FormInput name="lastname" className="flex-1" label="Nom" />
          </div>
          <FormInput name="subject" label="Sujet" />
          <FormInput
            name="content"
            label="Contenu"
            type="textarea"
            inputClassName="min-h-[200px]"
          />
          <Button title="Soumettre" type="submit" />
        </form>
      </FormProvider>
    </div>
  );
}

export default ContactPage;
