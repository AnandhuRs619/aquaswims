"use client";
import useFormValidation from "@/utils/validation/UseFromValidation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Form = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const ServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    emailjs.init(PublicKey); // Initialize EmailJS with your public key
  }, []);

  const [loading, setLoading] = useState(false);
  const { values, errors, handleChange, validate, resetForm } =
    useFormValidation(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      emailjs
        .sendForm(ServiceId, TemplateId, e.target, PublicKey) // Replace ServiceId, TemplateId, and PublicKey with actual values
        .then((result) => {
          console.log("Email sent successfully!");
          console.log("Form data:", result);
          resetForm(); // Reset the form after successful submission
          toast.success("Message Send Successfully");
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <form className="max-w-md mx-auto h-full w-full" onSubmit={handleSubmit}>
        <div>
          <h1 className="text-2xl mb-6 font-bold">Write To Us</h1>
          {/* <p className='text-md mb-10 text-accent'>Our friendly team would love to hear from you.</p> */}
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-base text-[#344054]"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              className="shadow-sm border border-[#D0D5DD] text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500
     block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="First name"
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs">{errors.firstName}</span>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-base text-[#344054]"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              className="shadow-sm border border-[#D0D5DD]  text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500
     block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Last name"
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs">{errors.lastName}</span>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-base text-[#344054]"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="shadow-xs border border-[#D0D5DD]  text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500
     block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="you@company.com"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email}</span>
          )}
        </div>

        <div class="mb-5">
          <label for="phone" class="block text-base mb-2 text-[#344054]">
            Phone Number
          </label>
          <div className="flex items-center border border-[#D0D5DD] w-full rounded-lg focus-within:ring-blue-500">
            <div className="relative">
              <select
                id="country-code"
                name="country-code"
                value={values.countryCode}
                onChange={handleChange}
                className="appearance-none text-[#101828] border-[#D0D5DD] text-md border border-r-0 border-t-0 border-b-0 rounded-lg pr-8 py-2 px-2  focus:outline-none"
              >
                <option value="+1">US</option>
                <option value="+44">UK</option>
                <option value="+91">India</option>
              </select>
              <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                &#x25BE;
              </span>
            </div>
            <input
              type="text"
              className="w-full px-3 text-xs py-2 focus:outline-none"
              placeholder="+1 (555) 000-0000"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="text-red-500 text-xs">{errors.phone}</span>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label for="message" class="block mb-2 text-base text-[#344054] ">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            name="message"
            value={values.message}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm  rounded-lg border border-[#D0D5DD] focus:ring-blue-500
   focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-xs">{errors.message}</span>
          )}
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              defaultValue
              className="w-4 h-4 border border-[#D0D5DD]  rounded-3xl focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label htmlFor="terms" className="ms-2 text-base text-accent ">
            You agree to our friendly{" "}
            <span className="underline">privacy policy.</span>
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            ></a>
          </label>
        </div>
        <button
          type="submit"
          className="w-full focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-base px-5 py-2.5 text-center bg-green-500 dark:text-white"
          disabled={loading} 
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default Form;
