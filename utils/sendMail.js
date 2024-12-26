import emailJS from "@emailjs/browser";

export const sendEmail = async (templateParams) => {
  await emailJS
    .send(
      process.env.SECRET_API_KEY, // Replace with your Service ID
      process.env.TEMPLATE_KEY, // Replace with your Template ID
      templateParams,
      process.env.EMAIL_KEY // Replace with your Public Key
    )
    .then(
      (response) => {
        alert("Message sent successfully!");
        return;
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        throw Error(error);
      }
    );
};

export const validateForm = (formData, cb) => {
  const newErrors = {};
  if (!formData.firstname.trim())
    newErrors.firstname = "Firstname is required.";
  if (!formData.lastname.trim()) newErrors.lastname = "Lastname is required.";
  if (!formData.email.trim()) {
    newErrors.email = "Email address is required.";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
    newErrors.email = "Invalid email address.";
  }
  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required.";
  } else if (!/^\d{10,15}$/.test(formData.phone)) {
    newErrors.phone = "Invalid phone number.";
  }
  if (!formData.projectType)
    newErrors.projectType = "Please select a project type.";
  if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
  cb(newErrors);
  return Object.keys(newErrors).length === 0;
};
