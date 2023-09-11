

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function nextConfig(config) {
  return config;
}

module.exports = nextConfig({
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/storybook',
        destination: '/storybook/index.html',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
      {
        source: '/api/:any*',
        destination: '/api/:any*',
      },
      // Rewrite everything else to use `pages/app`
      {
        source: `/neofelis/:any*`,
        destination: `/neofelis/`,
      },
    ];
  },
  experimental: {
    appDir: true,
    // This experimental configuration is useful to remove some SWC dependencies
    // from the final output. Those dependencies are included since Storybook v7
    // https://github.com/orgs/vercel/discussions/103#discussioncomment-6356642
    // https://nextjs.org/docs/app/api-reference/next-config-js/output#caveats
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
      ],
    },
  },
});
