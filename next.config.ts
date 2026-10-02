import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_OUTPUT === "server" ? undefined : "export",
};

export default nextConfig;
