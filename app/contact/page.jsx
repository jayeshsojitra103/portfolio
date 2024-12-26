"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

import { info, initialContactState } from "@/const";
import { sendEmail, validateForm } from "@/utils/sendMail";

const Contact = () => {
  const [formData, setFormData] = useState(initialContactState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null }); // Clear error for the field
  };

  const handleExpired = () => {
    setIsVerified(false);
  };

  const handleCaptchaSubmission = async (token) => {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
        setErrors({ ...errors, captcha: null });
      }
    } catch (e) {
      setIsVerified(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(formData, setErrors)) return;

    if (!isVerified) {
      setErrors({ ...errors, captcha: "Please complete the CAPTCHA." });
      return;
    }

    setIsLoading(true);

    const templateParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      message: formData.message,
    };

    await sendEmail(templateParams);
    setFormData(initialContactState);
    setIsLoading(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let{"'"}s work together!</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="d-flex felx-col">
                  <Input
                    type="text"
                    placeholder="Firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm">{errors.firstname}</p>
                  )}
                </div>
                <div className="d-flex felx-col">
                  <Input
                    type="text"
                    placeholder="Lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-sm">{errors.lastname}</p>
                  )}
                </div>
                <div className="d-flex felx-col">
                  <Input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="d-flex felx-col">
                  <Input
                    type="text"
                    placeholder="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="d-flex felx-col">
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, projectType: value })
                  }
                  value={formData.projectType}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select project type"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select project type</SelectLabel>
                      <SelectItem value="FullStack development">
                        FullStack development
                      </SelectItem>
                      <SelectItem value="Backend development">
                        Backend development
                      </SelectItem>
                      <SelectItem value="Frontend development">
                        Frontend development
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.projectType && (
                  <p className="text-red-500 text-sm">{errors.projectType}</p>
                )}
              </div>
              <div className="d-flex felx-col">
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="flex justify-center mt-4">
                <ReCAPTCHA
                  sitekey={process.env.RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaSubmission}
                  onExpired={handleExpired}
                />
              </div>
              {!isLoading ? (
                <Button size="md" className="max-w-40" type="submit">
                  Send message
                </Button>
              ) : (
                <button
                  type="button"
                  className="max-w-40 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-black bg-accent hover:bg-accent-hover transition ease-in-out duration-150 cursor-not-allowed"
                  disabled
                >
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </button>
              )}
            </form>
          </div>
          <div className="flex-0 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 mb-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px] ">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.value}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
