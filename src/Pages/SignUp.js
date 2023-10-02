import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import logo from "../assets/signUpLogo.png";
export default function SignUp() {
    // const prevProfileImg = null;

    const [img, setimg] = useState(null)
    let maxChar = 500;
    const [aboutText, setaboutText] = useState('')
    // const [phNumber, setphNumber] = useState('')
    function handleTextChange(e) {
        let userText = e.target.value;
        if (userText.length <= maxChar) {
            setaboutText(userText)
        }
    }
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: '',
        userName: '',
        bday: '',
        aboutMe: '',
        phoneNumber: '',
        checkbox: false,
    }
    // function handlePhNumber(e) {
    //     let phNumberLength = e.target.value.toString().length;
    //     if(phNumberLength<=11 ){
    //         setphNumber(e.target.value);
    //     }


    // }

    const schema = {

        firstName: Yup.string().required("Required*").min(2, "Minimum 2 Words"),
        lastName: Yup.string().required("Required*").min(2, "Minimum 2 Words"),
        email: Yup.string().email("Invalidate email address").required("Required*"),
        password: Yup.string().matches(/^(?=.*[A-Z])(?=.*\W).{8,}$/, "Password Should must have 8 characters , including 1 Uppercase and 1 Special Character").required("password is required"),
        rePassword: Yup.string().required("Confirm Password Required*").oneOf([Yup.ref("password"), null], "Password Must Matched"),
        userName: Yup.string().required("Username required*").min(4, "Username must be 4 characters"),
        bday: Yup.string().required("Select Your birthday required"),
        aboutMe: Yup.string().required("About Me required*").min(10, "Write about yourself atleast 10 characters"),
        phoneNumber: Yup.string().matches(/^[0-9]{11}$/, "Invalid phone number").required("Phone number is required"),
        checkbox: Yup.boolean()
            .oneOf([true], "Checkbox must be checked")
            .required("Checkbox must be checked")
    }

    useEffect(() => {

        var dateInput = document.getElementById('bday');

        // Get the current date
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        var yyyy = today.getFullYear();
        var currentDate = yyyy + '-' + mm + '-' + dd;

        // Set the default value
        dateInput.value = currentDate;
    }, []);

    const openPicSelectBox = (e) => {
        e.preventDefault()
        document.querySelector(".pic-dailog-box").classList.add("flex")
        document.querySelector(".pic-dailog-box").classList.remove("hidden")


    }
    const closePicDialogBox = (e) => {
        e.preventDefault()
        document.querySelector(".pic-dailog-box").classList.add("hidden")
        document.querySelector(".pic-dailog-box").classList.remove("flex")

    }
    const imageRef = useRef(null)
    function handleImageChange(e) {
        const imgFile = e.target.files[0];
        console.log(imgFile)
        setimg(imgFile)
        // prevProfileImg=imageRef
        document.querySelector(".pic-dailog-box").classList.add("hidden")
        document.querySelector(".pic-dailog-box").classList.remove("flex")
    }


    function openFileForImg() {

        imageRef.current.click()

    }

    return (
        <>
            <div className="signUp-page w-[100vw] relative">

                <div className="pic-dailog-box hidden rounded-[5%] absolute  flex-col justify-between top-30 md:left-[20%] left-[10%] right-[20%] bg-black text-white  h-[60vh] w-[80%] md:w-[40%] mx-auto">
                    <div onClick={closePicDialogBox} className="close-icon cursor-pointer absolute top-3 right-4">
                        <i class="fa-solid fa-xmark fa-2xl" style={{ color: "#ffffff" }}></i>
                    </div>
                    <h3 className="text-center font-bold mt-3 text-lg">Upload Profile Pic </h3>
                    <div className="imageSelectorButton overflow-hidden 
                     h-[200px] w-[200px] rounded-[50%] bg-red-900 mx-auto flex justify-center items-center text-white">
                        {img ? <img src={URL.createObjectURL(img)} alt="Profilepic" className="object-cover w-full h-full" /> : "Choose a picture"
                        }
                    </div>
                    <button onClick={openFileForImg} className="chose-img-btn rounded-md mb-3 py-2 w-[40%] font-bold text-white mx-auto" style={{ backgroundColor: "rgb(95, 213, 213)" }}>
                        Upload Image
                    </button>

                    <input type="file" ref={imageRef} name="chose-img" onChange={handleImageChange} className="hidden" />

                </div>

                <div className="navbar bg-white h-[45px] fixed top-0 left-0 right-0 flex justify-center">
                    <img src={logo} alt="Logo" />
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object(schema)

                    }
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                    <Form  className="form mt-[100px] space-y-4 mb-14 pb-10 flex flex-col  justify-center items-center  w-[100%] px-4 md:w-[50%] mx-auto ">
                        <button onClick={openPicSelectBox} className="addprofile  h-[100px] w-[100px] border-2 flex flex-col justify-center overflow-hidden items-center  border-blue-950 rounded-[50%]">
                            {img ? <img src={URL.createObjectURL(img)} alt="ProfilePic" className="object-cover w-full h-full" /> :
                                <div> <div className="camera-icon">
                                    <i className="fa-solid fa-camera fa-lg"></i>
                                </div>
                                    <h2 className="text-sm">Add Photo</h2></div>}
                        </button>
                        <div className="name flex justify-between w-full">
                            <div className="first-name w-[49%]">
                                <label htmlFor="first-name" className="font-semibold text-lg">
                                    First Name:
                                    <Field
                                        type="text"
                                        name="firstName"
                                        id="first-name"
                                        className="w-full p-2 focus:outline-none border-2 border-gray-300 rounded-md "
                                        placeholder="Enter your First Name"

                                    />
                                    <ErrorMessage component={"label"} className="text-red-400 text-sm" name="firstName" />
                                </label>
                            </div>
                            <div className="last-name w-[49%]">
                                <label htmlFor="last-name" className="font-semibold text-lg">
                                    Last Name:
                                    <Field
                                        type="text"
                                        name="lastName"
                                        id="last-name"
                                        className="w-full p-2 focus:outline-none border-2 border-gray-300 rounded-md "
                                        placeholder="Enter your Last Name"
                                    />
                                    <ErrorMessage component={"label"} className="text-red-400 text-sm" name="lastName" />

                                </label>
                            </div>
                        </div>
                        <div className="username-field w-full">
                            <label htmlFor="username" className="font-semibold text-lg">User Name:
                                <Field name="userName" type="text" id="username" className="p-2 w-[100%] focus:outline-none border-2 border-gray-300 rounded-md" placeholder="Create a User Name" />
                                <ErrorMessage component={"label"} className="text-red-400 text-sm" name="userName" />

                            </label>
                        </div>
                        <div className="email-field w-full">
                            <label htmlFor="email" className="font-semibold text-lg">Email:
                                <Field name="email" type="text" id="email" className="p-2 w-[100%] focus:outline-none border-2 border-gray-300 rounded-md" placeholder="Enter your Email" />
                                <ErrorMessage component={"label"} className="text-red-400 text-sm" name="email" />

                            </label>
                        </div>
                        <div className="phNumber-field w-full">
                            <label htmlFor="phone-number" className="font-semibold text-lg">Phone number:
                                <Field type="tel" name="phoneNumber" id="phone-number" className="p-2 appearance-none no-spinners w-[100%] focus:outline-none border-2 border-gray-300 rounded-md" placeholder="(000) 000-0000" />
                                <ErrorMessage component={"label"} className="text-red-400 text-sm" name="phoneNumber" />

                            </label>
                        </div>
                        <div className="pass-field w-full">
                            <label htmlFor="password" className="font-semibold text-lg">Password:
                                <Field name="password" type="password" id="password" className="p-2 w-[100%] focus:outline-none border-2 border-gray-300 rounded-md" placeholder="Enter a password" />
                                <ErrorMessage component={"label"} className="text-red-400 text-sm" name="password" />

                            </label>
                        </div>
                        <div className="repass-field w-full">
                            <label htmlFor="repassword" className="font-semibold text-lg">Re-Password:
                                <Field name='rePassword' type="password" id="repassword" className="p-2 w-[100%] focus:outline-none border-2 border-gray-300 rounded-md" placeholder="Re-Enter a password" />
                                <ErrorMessage component={"label"} className="text-red-400 text-sm" name="rePassword" />

                            </label>
                        </div>
                        <div className="bday-field w-full">
                            <label htmlFor="bday" className="font-semibold text-lg">Birth-Day:
                                <Field type="date" name="bday" id="bday" className="p-2 w-[100%] focus:outline-none border-2 border-gray-300 rounded-md" />
                                <ErrorMessage component={"label"} className="text-red-400 text-sm" name="bday" />

                            </label>
                        </div>
                        <div className="about-field w-full flex flex-col">
                            <label htmlFor="about" className="font-semibold text-lg">About me:
                                <Field as="textarea" name="aboutMe"id="about" cols="30" rows="5" className="p-2 w-[100%] focus:outline-none border-2 border-gray-300 rounded-md" placeholder="Let other app users know about yourself, your boat, your dock" style={{ resize: 'none' }} />
                                <ErrorMessage component={"label"} className="text-red-400 text-sm" name="aboutMe" />
                            </label>

                            <p className="text-end">{maxChar - aboutText.length} Max Characters.</p>
                        </div>
                        <div className="terms-condition flex space-x-2">
                            <Field type="checkbox" name="checkbox" />
                            <ErrorMessage component={"label"} className="text-red-400 text-sm" name="checkbox" />

                            <p>I have read and accept the <strong style={{ color: " rgb(95, 213, 213)", cursor: "pointer" }}>Terms and Conditions</strong> </p>

                        </div>
                        <button type="submit" onSubmit={()=>{console.log("submitter")}} name="submit-btn" id="signUpBtn" className="signUp-btn flex justify-center   rounded-md text-lg text-white items-center w-full p-3" >
                            Sign Up
                        </button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}