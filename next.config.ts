import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The course pages were removed; send old links to the home page instead of a 404.
  async redirects() {
    return [
      { source: "/cursos", destination: "/", permanent: false },
      { source: "/curso/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
