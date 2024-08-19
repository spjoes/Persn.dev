/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.persn.dev',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'media.forgecdn.net',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
                port: ''
            },
        ],
    },
};

export default nextConfig;
