"use client";

import { useIntl } from "react-intl";

import ContactForm from "@/components/contact";

const Contact = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={"flex flex-col container p-8 mx-auto"}>
      <div className={"flex flex-col w-4xl"}>
        <h1 className={"text-3xl font-bold mb-8"}>
          {formatMessage({ id: "materne.contact.title" })}
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
