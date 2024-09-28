import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import React from "react";
import { useIntl } from "react-intl";

import { sendEmail } from "@/utils/send-email";

export type ContactFormValues = {
  email: string;
  name: string;
  message: string;
};

const ContactForm = () => {
  const { formatMessage } = useIntl();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    message: yup.string().required(),
  });

  console.log("AXEL process.env.API_BASE_URL: ", process.env.EMAIL_PASSWORD);
  const { register, setValue, handleSubmit, getFieldState, formState } =
    useForm<ContactFormValues>({
      resolver: yupResolver(schema),
      mode: "all",
      reValidateMode: "onChange",
    });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("AXEL data: ", data);
    await sendEmail(data);
  };

  console.log("AXEL formState: ", formState.isValid);

  return (
    <div className={"flex flex-col gap-8 items-center"}>
      <form
        className={"flex flex-col w-[700px] gap-4"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register("name")}
          errorMessage={getFieldState("name").error?.message}
          isInvalid={!!getFieldState("name").error?.message}
          placeholder="Name"
        />
        <Input
          {...register("email")}
          errorMessage={getFieldState("email").error?.message}
          isInvalid={!!getFieldState("email").error?.message}
          placeholder="Email"
          onValueChange={(value) => setValue("email", value)}
        />
        <Textarea
          {...register("message")}
          errorMessage={getFieldState("message").error?.message}
          isInvalid={!!getFieldState("message").error?.message}
          placeholder="Message"
          onValueChange={(value) => setValue("message", value)}
        />

        <Button
          className={"self-end mt-4"}
          type={"submit"}
          variant={"bordered"}
        >
          {formatMessage({ id: "materne.contact.form.submit" })}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
