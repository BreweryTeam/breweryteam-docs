import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    images: {
        remotePatterns: [new URL("https://cdn.jsdelivr.net/npm/**")],
    },
};

export default withMDX(config);
