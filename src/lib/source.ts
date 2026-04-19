import { docs } from "collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { docsContentRoute, docsImageRoute, docsRoute } from "./shared";
import { icons } from "lucide-react";
import { createElement } from "react";

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
    baseUrl: docsRoute,
    source: docs.toFumadocsSource(),
    plugins: [lucideIconsPlugin()],
    icon: iconResolver,
});

function iconResolver(icon: string | undefined) {
    if (!icon) return;

    if (icons[icon as keyof typeof icons]) {
        return createElement(icons[icon as keyof typeof icons]);
    }

    return createElement("img", {
        src: icon,
    });
}

export function getPageImage(page: InferPageType<typeof source>) {
    const segments = [...page.slugs, "image.png"];

    return {
        segments,
        url: `${docsImageRoute}/${segments.join("/")}`,
    };
}

export function getPageMarkdownUrl(page: InferPageType<typeof source>) {
    const segments = [...page.slugs, "content.md"];

    return {
        segments,
        url: `${docsContentRoute}/${segments.join("/")}`,
    };
}

export async function getLLMText(page: InferPageType<typeof source>) {
    const processed = await page.data.getText("processed");

    return `# ${page.data.title} (${page.url})

${processed}`;
}
