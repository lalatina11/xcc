import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {hostname:"profile-candra.vercel.app"},
      {hostname:"img.freepik.com"},
      {hostname:"www.freepik.com"},
      {hostname:"img.clerk.com"}
    ]
  }
};

export default nextConfig;
