import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "@/lib/i18n";

export const i18nUI = defineI18nUI(i18n, {
    en: {
        displayName: "English",
    },
    ru: {
        displayName: "Русский",
        chooseLanguage: "Выберите язык",
        chooseTheme: "Выберите тему",
        editOnGithub: "Отредактировать на GitHub",
        lastUpdate: "Последнее изменение",
        nextPage: "Следующая страница",
        previousPage: "Предыдущая страница",
        search: "Поиск",
        toc: "На этой странице",
        tocNoHeadings: "Нет заголовков",
    },
});

const appNameByLang: Record<string, string> = {
    en: "Brewery Team Docs",
    ru: "Документация Brewery Team",
};

export function baseOptions(lang: string): BaseLayoutProps {
    return {
        nav: {
            title: appNameByLang[lang] || appName,
        },
        githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    };
}
