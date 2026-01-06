/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    serverComponentsHmrCache: false // default to true
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fytjdsmmuyvewivgwass.supabase.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://findmyrideai.created.app/;",
          },
        ],
      },
    ];
  }

};

export default nextConfig;
