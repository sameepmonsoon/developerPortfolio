import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { IoMdPaperPlane } from "react-icons/io";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import SpecialButton from "../SpecialButton/SpecialButton";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const [mouseOver, setMouseOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [state, handleSubmit] = useForm("mknavgee");

  let validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name."),
    email: yup.string().email().required("Please enter your email."),
    message: yup.string().required("Please enter a message."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      setIsLoading(true);
      setTimeout(() => {
        const toastId = "alert";
        const existingToast = toast.isActive(toastId);

        if (existingToast) {
          toast.update(toastId, {
            render: "Thank you for your message. I will be in touch soon.",
            autoClose: 1000,
          });
        } else {
          toast("Thank you for your message. I will be in touch soon.", {
            toastId: toastId,
            className: "toast-center",
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            closeButton: false,
            transition: Slide,
            icon: false,
            style: {
              backgroundColor: "#E7FFF1;",
              color: "#010026",
            },
          });
        }
        setIsLoading(false);
        resetForm();
      }, 1000);
    },
    validationSchema: validationSchema,
  });

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };
  return (
    //email is sent via formspree--- it needs a fromspree account "https://formspree.io/f/yourid"
    <form
      action="https://formspree.io/f/"
      method="POST"
      onSubmit={formik.handleSubmit}
      className=" flex flex-col gap-10 justify-start pt-2 items-center text-deep-blue text-[15px] font-semibold tracking-wider w-[10rem] md:w-[28rem] h-[60vh] ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        variants={{
          hidden: {
            x: -100,
          },
          visible: {
            x: 0,
          },
        }}>
        <input
          maxLength={30}
          className="h-[3rem] w-[20rem] md:w-[25rem]  tracking-wider rounded-[2px] text-deep-blue p-2 flex flex-row justify-center items-center capitalize border-[1px] border-deep-blue/50 dark:border-0  focus:outline-none focus:ring-1 focus:ring-deep-blue/80 focus:border-transparent"
          type="text"
          name="name"
          id="name"
          placeholder={
            formik.errors
              ? `${
                  formik.touched.name && formik.errors.name
                    ? `${formik.errors.name}`
                    : `name`
                }`
              : `name`
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: {
            x: -100,
          },
          visible: {
            x: 0,
          },
        }}>
        <input
          maxLength={30}
          className="h-[3rem] w-[20rem] md:w-[25rem] tracking-wider rounded-[2px] text-deep-blue p-2 flex flex-row justify-center items-center capitalize border-[1px] border-deep-blue/50 dark:border-0  focus:outline-none focus:ring-1 focus:ring-deep-blue/80 focus:border-transparent"
          type="email"
          name="email"
          id="email"
          placeholder={
            formik.errors
              ? `${
                  formik.touched.email && formik.errors.email
                    ? `${formik.errors.email}`
                    : `Email`
                }`
              : `Email`
          }
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: {
            x: -100,
          },
          visible: {
            x: 0,
          },
        }}>
        <textarea
          className="h-[6rem] w-[20rem] md:w-[25rem] resize-none tracking-wider rounded-[2px] text-deep-blue p-2 flex flex-row justify-center items-center capitalize border-[1px] border-deep-blue/50 dark:border-0  focus:outline-none focus:ring-1 focus:ring-deep-blue/80 focus:border-transparent"
          name="message"
          id="message"
          cols={30}
          rows={5}
          maxLength={30}
          onChange={formik.handleChange}
          value={formik.values.message}
          placeholder={
            formik.errors
              ? `${
                  formik.touched.message && formik.errors.message
                    ? `${formik.errors.message}`
                    : `Message`
                }`
              : `Message`
          }></textarea>{" "}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          hidden: {
            x: -100,
          },
          visible: {
            x: 0,
          },
        }}>
        <SpecialButton
          itemOne={<IoMdPaperPlane size={25} />}
          itemTwo={"Send"}
        />
      </motion.div>
    </form>
  );
};

export default Form;
