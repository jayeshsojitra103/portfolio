/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SECRET_API_KEY: process.env.SECRET_API_KEY,
    TEMPLATE_KEY: process.env.TEMPLATE_KEY,
    PUBLIC_EMAIL_KEY: process.env.PUBLIC_EMAIL_KEY,
  },
};

export default nextConfig;
