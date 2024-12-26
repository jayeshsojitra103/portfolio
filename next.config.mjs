/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SECRET_API_KEY: process.env.SECRET_API_KEY,
    TEMPLATE_KEY: process.env.TEMPLATE_KEY,
    EMAIL_KEY: process.env.EMAIL_KEY,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
  },
};

export default nextConfig;
