// @ts-check

import solidJs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://reoseah.github.io",
	integrations: [solidJs()],
});
