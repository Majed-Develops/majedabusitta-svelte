import { G as attr, I as attr_class, S as clsx } from "./index.js";
import { h as html } from "./html.js";
function Icons($$payload, $$props) {
  let { name, class: className = "", size = 24 } = $$props;
  const icons = {
    github: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />`,
    linkedin: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />`,
    email: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />`,
    external: `<path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />`,
    download: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" x2="12" y1="15" y2="3" />`,
    sun: `<circle cx="12" cy="12" r="5" /><path d="M12 1v2" /><path d="M12 21v2" /><path d="M4.22 4.22l1.42 1.42" /><path d="M18.36 18.36l1.42 1.42" /><path d="M1 12h2" /><path d="M21 12h2" /><path d="M4.22 19.78l1.42-1.42" /><path d="M18.36 5.64l1.42-1.42" />`,
    moon: `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />`,
    menu: `<line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />`,
    close: `<path d="M18 6 6 18" /><path d="M6 6l12 12" />`,
    cyber: `<circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 6v6" /><path d="M9 4.5L7.5 6L9 7.5" /><path d="M15 4.5L16.5 6L15 7.5" /><path d="M9 16.5L7.5 18L9 19.5" /><path d="M15 16.5L16.5 18L15 19.5" /><path d="M20 12h-6m-6 0H2" /><path d="M4.5 9L6 7.5L7.5 9" /><path d="M4.5 15L6 16.5L7.5 15" /><path d="M19.5 9L18 7.5L16.5 9" /><path d="M19.5 15L18 16.5L16.5 15" />`,
    hackerone: `<path d="M11.996 0C5.372 0 0 5.372 0 12s5.372 12 11.996 12C18.628 24 24 18.628 24 12S18.628 0 11.996 0zM8.5 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm7 9c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v7.5z"/>`
  };
  const iconPath = icons[name] || "";
  const isFilled = name === "hackerone";
  $$payload.out.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24"${attr("fill", isFilled ? "currentColor" : "none")}${attr("stroke", isFilled ? "none" : "currentColor")}${attr("stroke-width", isFilled ? "0" : "2")}${attr("stroke-linecap", isFilled ? "butt" : "round")}${attr("stroke-linejoin", isFilled ? "miter" : "round")}${attr_class(clsx(className))}>${html(iconPath)}</svg>`);
}
export {
  Icons as I
};
