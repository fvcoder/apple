import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  basename: import.meta.env.PROD ? "https://fvcoder.github.io/apple/" : "/",
} satisfies Config;
