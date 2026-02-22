import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  basename: process.env.PUBLIC_URL,
} satisfies Config;
