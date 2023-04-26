import { MdPhone } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
import { VscLocation } from "react-icons/vsc";
import Form from "../../Components/Form/Form";
import LocationContainer from "../../Components/LocationContainer/LocationContainer";
import { motion } from "framer-motion";
const GetIntouch = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center md:gap-[5rem] py-0">
      <span className="order-1 flex flex-row text-[25px] font-semibold capitalize h-[5rem] md:h-full dark:text-white text-deep-blue">
        Get In Touch &nbsp;| &nbsp; say hello
      </span>
      <div className="flex flex-col md:flex-row order-2 justify-center items-center md:justify-start md:items-start gap-5 h-[80vh] w-[21rem] md:w-[55vw] dark:bg-deep-blue bg-white ">
        <div className="order-2 md:order-2 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}>
            <Form />
          </motion.div>
        </div>
        <div className="order-1 md:order-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: {opacity: 0,
                x: 100,
              },
              visible: {opacity:1,
                x: 0,
              },
            }}>
            <LocationContainer
              cardTitle=""
              cityState="Kathmandu, Nepal"
              cityStateIcon={<VscLocation size={25} />}
              phoneNumber={""}
              phoneNumberIcon={<MdPhone size={25} />}
              contactDetails="monsoon.sameep@gmail.com"
              contactDetailIcon={<TbBrandGmail size={25} />}
            />
          </motion.div>
        </div>
      </div>
      {/* <motion.div
        className="order-3 py-0"
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
            x: -200,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}>
        <iframe
          className="order-3 md:order-2 h-[20rem] md:h-[30rem] md:w-[50vw]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689209436!2d85.29111321529057!3d27.709031933495286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1679256052374!5m2!1sen!2snp"
          width="350"
          height="300"
          style={{ border: "0", borderRadius: "5px" }}
          // @ts-ignore
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>{" "}
      </motion.div> */}
    </section>
  );
};

export default GetIntouch;
