import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const sendEmail = (formRef: React.RefObject<HTMLFormElement>) => {
  if (formRef.current) {
    emailjs
      .sendForm(
        "service_iwxvqme", // Replace with your EmailJS service ID
        "template_esk1364", // Replace with your EmailJS template ID
        formRef.current, // Form element reference
        "9Cw-2dvwfHm1z0Io9" // Public key
      )
      .then(() => {
        toast.success("Message sent successfully");
      })
      .catch((error) => {
        console.log(error);

        toast.error("Failed to send message, try again", error);
      });
  } else {
    console.error("Form reference is null");
  }
};
