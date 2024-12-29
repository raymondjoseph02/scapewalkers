// import React, {  useEffect } from "react";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { sendEmail } from "../../utility/EmailSender";
import { useRef, useState } from "react";
const contactUsSchema = Yup.object().shape({
  from_name: Yup.string().required("Name is required"),

  from_email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string()
    .required("message filed can not be empty")
    .min(3, "too short ")
    .max(320, "max "),
});

const contactUsInitialValues = {
  from_name: "",
  from_email: "",
  message: "",
};

function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = () => {
    setIsSending(true);
    try {
      sendEmail(formRef);
      setTimeout(() => {
        setIsSending(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsSending(false);
      }, 2000);
    }
  };
  return (
    <div className="flex flex-col gap-[16px] justify-center items-center  w-full">
      <Formik
        initialValues={contactUsInitialValues}
        validationSchema={contactUsSchema}
        validateOnBlur={true}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form
            ref={formRef}
            className={`flex bg-[#FFFFFF] rounded-[16px] p-[2rem] flex-col gap-[2rem] items-center  justify-center w-full`}
          >
            <div className="w-full flex flex-col gap-y-[1rem]">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex flex-col gap-[6px] basis-0 sm:basis-1/2">
                  <label
                    htmlFor="name"
                    className="text-[.9rem] capitalize text-[#181A1B] font-medium leading-[23.8px] tracking-tighter"
                  >
                    full name *
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="from_name"
                    placeholder="Enter your name"
                    className="outline-none border-[1px] p-[16px]  rounded-lg border-[#EBEEF3] text-[14px] font-medium focus:border-[#635ef5] leading-[23.8px] tracking-tighter"
                  />
                  {errors.from_name && touched.from_name && (
                    <small className="text-[#E22D57]">{errors.from_name}</small>
                  )}
                </div>

                <div className="flex flex-col gap-[6px] basis-0 sm:basis-1/2">
                  <label
                    htmlFor="email"
                    className="text-[.9rem] capitalize text-[#181A1B] font-medium leading-[23.8px] tracking-tighter"
                  >
                    Email *
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="from_email"
                    placeholder="yourname@example.com"
                    className="outline-none border-[1px] p-[16px] rounded-lg border-[#EBEEF3] text-[14px] font-medium focus:border-[#635ef5] leading-[23.8px] tracking-tighter"
                  />
                  {errors.from_email && touched.from_email && (
                    <small className="text-[#E22D57]">
                      {errors.from_email}
                    </small>
                  )}
                </div>
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-[6px] w-full">
                <label
                  htmlFor="message"
                  className="text-[.9rem] capitalize text-[#181A1B] font-medium leading-[23.8px] tracking-tighter"
                >
                  message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Tell us how we can assist you..."
                  className="outline-none border-[1px] p-[16px] rounded-lg border-[#EBEEF3] text-[14px] font-medium min-h-[120px] focus:border-[#635ef5] leading-[23.8px] tracking-tighter "
                />
                {errors.message && touched.message && (
                  <small className="text-[#E22D57]">{errors.message}</small>
                )}
              </div>
            </div>

            <div className="flex items-end justify-end w-full">
              <button
                type="submit"
                className="grid justify-center grid-cols-1 min-w-[150px] p-4 align-middle rounded-full bg-black/80 text-white_100 hover:bg-black"
              >
                {isSending ? "sending..." : "send a message"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
