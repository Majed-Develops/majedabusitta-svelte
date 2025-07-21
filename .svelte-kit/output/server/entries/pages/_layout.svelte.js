import { E as getContext, B as pop, z as push, F as ensure_array_like, G as attr, I as attr_class, J as escape_html, K as stringify, M as store_get, N as unsubscribe_stores, O as head, P as slot } from "../../chunks/index.js";
import "@sveltejs/kit/internal";
import { w as writable } from "../../chunks/exports.js";
import "clsx";
import "../../chunks/state.svelte.js";
import { I as Icons } from "../../chunks/Icons.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const defaultTheme = "light";
function createThemeStore() {
  const initialTheme = defaultTheme;
  const { subscribe, set, update } = writable(initialTheme);
  return {
    subscribe,
    setTheme: (theme2) => {
      set(theme2);
    }
  };
}
const theme = createThemeStore();
function ThemeToggle($$payload, $$props) {
  push();
  theme.subscribe((value) => {
  });
  $$payload.out.push(`<button class="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 slate:border-slate-600 slate:bg-slate-800 slate:text-slate-300 slate:hover:bg-slate-700" aria-label="Toggle theme">`);
  Icons($$payload, {
    name: "sun",
    size: 20,
    class: "rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 slate:rotate-180 slate:scale-0"
  });
  $$payload.out.push(`<!----> `);
  Icons($$payload, {
    name: "moon",
    size: 20,
    class: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 slate:rotate-180 slate:scale-0"
  });
  $$payload.out.push(`<!----> <svg class="absolute h-5 w-5 rotate-180 scale-0 transition-all slate:rotate-0 slate:scale-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></button>`);
  pop();
}
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" }
  ];
  const each_array = ensure_array_like(navigation);
  $$payload.out.push(`<header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80"><nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"><div class="flex lg:flex-1"><a href="/" class="-m-1.5 p-1.5"><span class="text-xl font-bold text-gray-900 dark:text-white">Majed Abu Sitta</span></a></div> <div class="flex lg:hidden">`);
  ThemeToggle($$payload);
  $$payload.out.push(`<!----> <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 ml-2"><span class="sr-only">Open main menu</span> `);
  Icons($$payload, { name: "menu", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></button></div> <div class="hidden lg:flex lg:gap-x-12"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out.push(`<a${attr("href", item.href)}${attr_class(`text-sm font-semibold leading-6 transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-gray-300")}`)}>${escape_html(item.name)}</a>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="hidden lg:flex lg:flex-1 lg:justify-end">`);
  ThemeToggle($$payload);
  $$payload.out.push(`<!----></div></nav> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></header>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer($$payload, $$props) {
  push();
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  $$payload.out.push(`<footer class="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"><div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"><div class="flex justify-center space-x-6 md:order-2"><a href="https://github.com/majed-develops" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"><span class="sr-only">GitHub</span> `);
  Icons($$payload, { name: "github", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a> <a href="https://www.linkedin.com/in/majed-bashir" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"><span class="sr-only">LinkedIn</span> `);
  Icons($$payload, { name: "linkedin", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a> <a href="https://hackerone.com/mr_devz" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-orange-500 dark:hover:text-orange-400"><span class="sr-only">HackerOne</span> `);
  Icons($$payload, { name: "hackerone", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a></div> <div class="mt-8 md:order-1 md:mt-0"><p class="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">© ${escape_html(currentYear)} Majed Abu Sitta. All rights reserved.</p></div></div></footer>`);
  pop();
}
function _layout($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Majed Abu Sitta - Full Stack Developer</title>`;
    $$payload2.out.push(`<meta name="description" content="Professional portfolio of Majed Abu Sitta, a full-stack developer specializing in React, Next.js, and modern web technologies."/> <meta name="keywords" content="Full Stack Developer, React, Next.js, TypeScript, Web Development"/> <meta name="author" content="Majed Abu Sitta"/> <meta property="og:type" content="website"/> <meta property="og:locale" content="en_US"/> <meta property="og:url" content="https://majedabusitta.com"/> <meta property="og:title" content="Majed Abu Sitta - Full Stack Developer"/> <meta property="og:description" content="Professional portfolio showcasing projects, skills, and experience in modern web development."/> <meta property="og:site_name" content="Majed Abu Sitta Portfolio"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Majed Abu Sitta - Full Stack Developer"/> <meta name="twitter:description" content="Professional portfolio showcasing projects, skills, and experience in modern web development."/> <meta name="twitter:creator" content="@majed_bashir"/>`);
  });
  $$payload.out.push(`<div class="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased">`);
  Header($$payload);
  $$payload.out.push(`<!----> <main><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></main> `);
  Footer($$payload);
  $$payload.out.push(`<!----></div>`);
  pop();
}
export {
  _layout as default
};
