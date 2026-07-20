import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Next's default is "attachment", which some browsers treat as a
    // download hint even for inline <img> requests. We want these
    // rendered on the page, never prompted as a file download.
    contentDispositionType: "inline",
  },
};

export default nextConfig;
