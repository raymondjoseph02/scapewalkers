import { useRef, useState } from "react";
import Faq from "./Faq";
import { sendEmail } from "../../utility/EmailSender";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
const FaqSection = () => {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  let debounceTimer: ReturnType<typeof setTimeout>;
  const handleSubmit = () => {
    setIsSending(true);
    try {
      setTimeout(() => {
        sendEmail(formRef);
        clearTimeout(debounceTimer);
      }, 2000);
    } catch {
      toast("An error occur try again");
      setIsSending(false);
    } finally {
      setIsSending(false);
    }
  };
  const initialValues = {
    from_name: "",
    from_email: "",
    message: "",
  };
  const dropAQuestionSchema = Yup.object().shape({
    from_name: Yup.string().required("Name is required"),

    from_email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .required("message filed can not be empty")
      .min(3, "too short ")
      .max(320, "max "),
  });
  return (
    <section className="py-10 md:py-20">
      <div className="flex flex-col xl:w-[80%] w-full mx-auto gap-9  xl:px-0 px-5">
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold leading-3 text-blue-400 md:text-xxl">
            Faq
          </p>
          <h3 className="text-2xl font-bold capitalize md:text-5xl">
            frequently asked questions
          </h3>
        </div>
        <div className="flex flex-col justify-between lg:flex-row gap-y-10">
          <div className="basis-1/2">
            <Faq />
          </div>
          <div className="flex flex-col gap-5 px-5 basis-1/2 xl:px-20">
            <h4 className="text-xl font-medium md:text-3xl ">
              Ask a different question
            </h4>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={dropAQuestionSchema}
            >
              {({ errors, touched }) => (
                <Form ref={formRef} className={``}>
                  <div className="flex flex-col w-full">
                    <div className="">
                      <div className="flex flex-col gap-[6px] basis-0 sm:basis-1/2">
                        <Field
                          type="text"
                          id="name"
                          name="from_name"
                          placeholder=" name"
                          className="outline-none bottom-0 border-b-2 border-b-[#000000]   bg-transparent text-[14px] font-medium focus:border-[#635ef5] leading-[23.8px] tracking-tighter p-[1rem] capitalize"
                        />
                        {errors.from_name && touched.from_name && (
                          <small className="text-[#E22D57]">
                            {errors.from_name}
                          </small>
                        )}
                      </div>

                      <div className="flex flex-col gap-[6px] basis-0 sm:basis-1/2">
                        <Field
                          type="email"
                          id="email"
                          name="from_email"
                          placeholder="email"
                          className="outline-none bottom-0 border-b-2 border-b-[#000000] p-[1rem]  bg-transparent text-[14px] font-medium focus:border-[#635ef5] leading-[23.8px] tracking-tighter capitalize"
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
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder="Tell us how we can assist you..."
                        className="outline-none bottom-0 border-b-2 border-b-[#000000] p-[1rem]  bg-transparent capitalize text-[14px] font-medium focus:border-[#635ef5] leading-[23.8px] tracking-tighter"
                      />
                      {errors.message && (
                        <small className="text-[#E22D57]">
                          {errors.message}
                        </small>
                      )}
                    </div>
                  </div>

                  <div className="flex items-end justify-end w-full mt-2">
                    <button
                      type="submit"
                      className="grid justify-center grid-cols-1 min-w-[150px] p-4 align-middle rounded-full bg-black/80 text-white_100 hover:bg-black"
                      disabled={isSending}
                    >
                      {isSending ? "sending..." : "send a message"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;