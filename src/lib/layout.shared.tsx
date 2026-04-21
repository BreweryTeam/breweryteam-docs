import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "@/lib/i18n";

export const i18nUI = defineI18nUI(i18n, {
    en: {
        displayName: "English",
    },
    ru: {
        displayName: "Russian",
        chooseLanguage: "TRANSLATE ME VUTKA",
        chooseTheme: "TRANSLATE ME VUTKA",
        editOnGithub: "TRANSLATE ME VUTKA",
        lastUpdate: "TRANSLATE ME VUTKA",
        nextPage: "TRANSLATE ME VUTKA",
        previousPage: "TRANSLATE ME VUTKA",
        search: "TRANSLATE ME VUTKA",
        toc: "TRANSLATE ME VUTKA",
        tocNoHeadings: "TRANSLATE ME VUTKA",
    },
});

const appNameByLang: Record<string, string> = {
    en: "Brewery Team Docs",
    ru: "TRANSLATE ME VUTKA",
};

export function baseOptions(lang: string): BaseLayoutProps {
    return {
        nav: {
            title: appNameByLang[lang] || appName,
        },
        githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    };
}
