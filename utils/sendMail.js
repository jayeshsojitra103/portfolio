import emailJS from "@emailjs/browser";

export const sendEmail = async (templateParams) => {
  await emailJS
    .send(
      process.env.SECRET_API_KEY, // Replace with your Service ID
      process.env.TEMPLATE_KEY, // Replace with your Template ID
      templateParams,
      process.env.PUBLIC_EMAIL_KEY // Replace with your Public Key
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

  // Validate first name
  if (!formData.firstname.trim()) {
    newErrors.firstname = "Firstname is required.";
  }

  // Validate last name
  if (!formData.lastname.trim()) {
    newErrors.lastname = "Lastname is required.";
  }

  // Validate email
  if (!formData.email.trim()) {
    newErrors.email = "Email address is required.";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
    newErrors.email = "Invalid email address.";
  }

  // Validate phone (numbers only)
  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required.";
  } else if (!/^\d+$/.test(formData.phone)) {
    newErrors.phone = "Phone number must contain only digits.";
  } else if (formData.phone.length < 10 || formData.phone.length > 15) {
    newErrors.phone = "Phone number must be between 10 and 15 digits.";
  }

  // Validate project type
  if (!formData.projectType) {
    newErrors.projectType = "Please select a project type.";
  }

  // Validate message
  if (!formData.message.trim()) {
    newErrors.message = "Message cannot be empty.";
  }

  cb(newErrors);
  return Object.keys(newErrors).length === 0;
};
