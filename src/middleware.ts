import type { APIContext, MiddlewareNext } from "astro";
import { middleware } from "astro:i18n";
import { sequence } from "astro:middleware";

const i18nMiddleware = (ctx: APIContext, next: MiddlewareNext) => {
  if (ctx.isPrerendered) return next();

  const resourcePaths = [
    "/sitemap.xml",
    "/robots.txt",
    "/favicon.ico",
    "/_images",
    "/_server-islands",
    "/_actions",
    "/_astro",
    "/.well-known",
  ];

  if (resourcePaths.some((path) => ctx.url.pathname.includes(path)))
    return next();

  const routes = {
    en: "/en",
    es: "/es",
  };

  const routesKeys = Object.keys(routes);

  if (ctx.url.pathname === "/") {
    if (ctx.preferredLocale && routesKeys.includes(ctx.preferredLocale)) {
      return ctx.redirect(routes[ctx.preferredLocale as keyof typeof routes]);
    }

    if (ctx.preferredLocaleList && ctx.preferredLocaleList.length > 0) {
      for (const locale of ctx.preferredLocaleList) {
        if (routesKeys.includes(locale)) {
          return ctx.redirect(routes[locale as keyof typeof routes]);
        }
      }
    }

    return ctx.redirect(routes.en);
  }

  return next();
};

export const onRequest = sequence(
  i18nMiddleware,
  middleware({
    redirectToDefaultLocale: false,
    prefixDefaultLocale: true,
    fallbackType: "redirect",
  })
);
