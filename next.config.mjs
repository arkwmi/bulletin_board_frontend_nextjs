/** @type {import('next').NextConfig} */
import { config } from 'dotenv';

const nextConfig = {
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

export default nextConfig;
