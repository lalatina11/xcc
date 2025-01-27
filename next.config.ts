import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {hostname:"profile-candra.vercel.app"},
      {hostname:"img.freepik.com"}
    ]
  }
};

export default nextConfig;
