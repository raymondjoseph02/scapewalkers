import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const sendEmail = (formRef: React.RefObject<HTMLFormElement>) => {
  if (formRef.current) {
    emailjs
      .sendForm(
        "service_0xo82ww", // Replace with your EmailJS service ID
        "template_5xabux8", // Replace with your EmailJS template ID
        formRef.current, // Form element reference
        "JaBMvaEyyDkuh9GcR" // Public key
      )
      .then(() => {
        toast.success("Message sent successfully");
      })
      .catch(() => {
        toast.error("Failed to send message, try again");
      });
  } else {
    console.error("Form reference is null");
  }
};
