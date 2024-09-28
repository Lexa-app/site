import { ContactFormValues } from "@/components/contact";

export const sendEmail = async (data: ContactFormValues) => {
  try {
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error(err);
  }
};
