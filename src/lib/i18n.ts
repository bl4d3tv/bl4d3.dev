export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en: {
    title: "Software Developer | Infrastructure Administrator | Modder",
    description:
      "I'm a 22 years old Software Development student with two years of freelance experience building websites, desktop applications and REST APIs. In my free time, I enjoy learning new technologies, trying new programming languages, developing mods for video games and testing new open source projects.",
    "tech.title": "TECH STACK",
    "tech.desc": "These are some of the technologies I use the most.",
    "projects.title": "PROJECTS",
    "footer.msg": "Made with Astro",
    "footer.source": "Source code",
  },
  es: {
    title: "Dessarrollador de Software | Administrador de Sistemas | Modder",
    description:
      "Soy un estudiante de Desarrollo de Software de 22 años, con dos años de experiencia freelance creando sitios web, aplicaciones de escritorio y APIs REST. En mi tiempo libre me gusta aprender nuevas tecnologías, probar nuevos lenguajes de programación, desarrollar mods para videojuegos y probar nuevos proyectos open source.",
    "tech.title": "STACK TECNOLÓGICO",
    "tech.desc": "Estas son algunas de las tecnologías que más utilizo.",
    "projects.title": "PROYECTOS",
    "footer.msg": "Hecho con Astro",
    "footer.source": "Código fuente",
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  };
}
