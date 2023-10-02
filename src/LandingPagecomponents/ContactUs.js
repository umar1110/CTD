import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import ContactImg from "../assets/contactus.png";
export default function ContactUs() {

  const initialValues = {
    email: '',
    message: '',
    phoneNumber: '',
  }
  const schema = {
    email: Yup.string().email("Invalidate email address").required("Required*"),
    message: Yup.string().required("About Me required*").min(10, "Write about yourself atleast 10 characters"),
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/, "Invalid phone number").required("Phone number is required"),

  }

  return (

    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(schema)

        }
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}>
        <Form>

          <div className="contact-us sm:flex mx-auto md:w-[90%] w-full h-fit p-3 mb-10 md:px-10 ">
            <div className="contact-img w-full sm:w-[60%]">
              <img src={ContactImg} className="w-full h-full" alt="CntactImage" />
            </div>
            <div className="contact-form ml-3 flex justify-around flex-col">
              <h2
                style={{ color: "rgb(95, 213, 213)" }}
                className="text-2xl font-bold   text-center sm:ml-3  "
              >
                Contact Us
              </h2>
              <p>
                We Want to hear from you! Your questions & comments make the
                wxperience better for our Martimie Community
              </p>
              <label
                htmlFor="email"
                className="text-blue-950 font-semibold text-lg"
              >
              </label>
              Email :

              <Field
                type="text"
                name="email"
                id="emain"
                placeholder="Enter Your Email Here"
                className="p-2 focus:outline-none border-2  border-gray-200 rounded-md"
              />
              <ErrorMessage component={"label"} className="text-red-400 text-sm" name="email" />

              <label
                htmlFor="phone-number"
                className="text-blue-950 font-semibold text-lg"
              >
              </label>
              Phone Number :

              {/* <input type="number" id='phone-number' placeholder='(000) 000-0000' className='p-2 focus:border-none border-2 appearance-none border-gray-200 rounded-md' /> */}
              <Field
                type="number"
                name="phoneNumber"
                id="phone-number"
                placeholder="(000) 000-0000"
                className="p-2 focus:outline-none border-2  border-gray-200 rounded-md appearance-none no-spinners"
              />
              <ErrorMessage component={"label"} className="text-red-400 text-sm" name="phoneNumber" />

              <label
                htmlFor="message"
                className="text-blue-950 font-semibold text-lg"
              >
              </label>
              Message :

              <Field
                type="text"
                name="message"
                id="message"
                placeholder="Enter Your Message Here"
                className="p-2 focus:outline-none border-2 pb-10 border-gray-200 rounded-md"
              />
              <ErrorMessage component={"label"} className="text-red-400 text-sm" name="message" />

              <button className="send-msg-btn mt-2 p-2 w-[80%] text-white mx-auto rounded-md" style={{ backgroundColor: "rgb(95, 213, 213)", }}>
                Send Your Message
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}