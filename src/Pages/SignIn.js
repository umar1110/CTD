import React from "react";
import Logo from "../assets/signUpLogo.png";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
export default function SignIn() {


    const initialValues = {
        email: "",
        password: "",
    }

    return (
        <>



            <div className="signIn-page h-[100vh] flex flex-col justify-around bg-white">
                <Formik initialValues={
                    {
                        email: "",
                        password: ""
                    }
                }
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalidate email address").required("*Email Required"),
                            password: Yup.string().required("*Password Required").min(4, "Password Should must be atleast 4 characters")
                        })
                    }
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                    }}>
                    <Form className="pannel w-[35%] min-w-[520px] mx-auto">
                        <div className="logo w-[50%] mx-auto mb-6 ">
                            <img src={Logo} alt="Logo" className="w-full bg-inherit" />
                        </div>
                        <div className="emailPassword space-y-4 flex flex-col">
                            <label htmlFor="email" className="font-semibold text-lg">
                                Email :

                                <Field
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your Email Here"
                                    className="border-[1px] border-gray-400 focus:outline-none rounded-md p-2 w-[100%] mx-auto"
                                />
                                <ErrorMessage component={"label"} className="text-red-400 text-sm" name="email" />
                            </label>
                            <label htmlFor="password" className="font-semibold text-lg">
                                Password

                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Your Password Here"
                                    className="border-[1px] border-gray-400 focus:outline-none rounded-md p-2 w-[100%] mx-auto"
                                />
                                <ErrorMessage component={"label"} className="text-red-400 text-sm" name="password" />

                            </label>
                        </div>
                        <button
                            className="need-help ml-auto my-4 flex mr-4"
                            style={{ color: "rgb(95, 213, 213)" }}
                        >
                            Need Help Signing in ?
                        </button>
                        <div className="signIn-btns space-y-4 my-6">
                            <button type="submit"
                                className="sign-in flex w-[70%] rounded-lg my-4 mx-auto justify-center items-center py-2 px-3 font-bold"
                                style={{ backgroundColor: "rgb(95, 213, 213)", color: "white" }}
                            >
                                Sign In
                            </button>
                            <button
                                className="font-bold  my-4 mx-auto w-[70%] py-2  border-2 flex justify-center items-center rounded-md "
                                style={{
                                    borderColor: "rgb(95, 213, 213)",
                                    color: "rgb(95, 213, 213)",
                                }}
                            >
                                Continue As Guest
                            </button>
                        </div>
                        <p className="push-to-sighnup mx-auto text-black mt-6 w-fit ">
                            Not a member yet? <Link to="/signUp"> <strong style={{ color: "rgb(95, 213, 213)" }}>Sign Up Here</strong></Link>
                        </p>
                    </Form>
                </Formik>
            </div>
        </>
    );
}