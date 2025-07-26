import { O as head, F as ensure_array_like, G as attr, I as escape_html, B as pop, z as push } from "../../../chunks/index.js";
import { I as Icons } from "../../../chunks/Icons.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let featuredProjects = data.projects.filter((project) => project.featured);
  let otherProjects = data.projects.filter((project) => !project.featured);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Projects - Majed Abu Sitta</title>`;
  });
  $$payload.out.push(`<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"><div class="mx-auto max-w-2xl text-center"><h1 class="text-4xl font-bold tracking-tight sm:text-6xl"><span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">My Projects</span></h1> <p class="mt-6 text-lg leading-8 text-black dark:text-white">A collection of projects I've built while learning and exploring new technologies.</p></div> `);
  if (featuredProjects.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(featuredProjects);
    $$payload.out.push(`<div class="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24"><h2 class="text-2xl font-bold tracking-tight text-black dark:text-white mb-8">Featured Projects</h2> <div class="grid grid-cols-1 gap-8 lg:grid-cols-2"><!--[-->`);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let project = each_array[$$index_1];
      const each_array_1 = ensure_array_like(project.techStack);
      $$payload.out.push(`<div class="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">`);
      if (project.imageUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div class="aspect-video overflow-hidden rounded-lg mb-4"><img${attr("src", project.imageUrl)}${attr("alt", project.title)} class="h-full w-full object-cover object-center transition-transform group-hover:scale-105"/></div>`);
      } else {
        $$payload.out.push("<!--[!-->");
        if (project.videoUrl) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<div class="aspect-video overflow-hidden rounded-lg mb-4"><video${attr("src", project.videoUrl)}${attr("title", project.title)} class="h-full w-full object-cover object-center" autoplay muted loop></video></div>`);
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]--> <div class="flex-1"><h3 class="text-xl font-semibold text-black dark:text-white">${escape_html(project.title)}</h3> <p class="mt-2 text-sm text-black dark:text-white">${escape_html(project.description)}</p> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tech = each_array_1[$$index];
        $$payload.out.push(`<span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/20">${escape_html(tech)}</span>`);
      }
      $$payload.out.push(`<!--]--></div> <div class="mt-6 flex items-center gap-4">`);
      if (project.liveUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<a${attr("href", project.liveUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">`);
        Icons($$payload, { name: "external", size: 16 });
        $$payload.out.push(`<!----> Live Demo</a>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--> `);
      if (project.githubUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<a${attr("href", project.githubUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors">`);
        Icons($$payload, { name: "github", size: 16 });
        $$payload.out.push(`<!----> Source Code</a>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></div></div></div>`);
    }
    $$payload.out.push(`<!--]--></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (otherProjects.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array_2 = ensure_array_like(otherProjects);
    $$payload.out.push(`<div class="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24"><h2 class="text-2xl font-bold tracking-tight text-black dark:text-white mb-8">Other Projects</h2> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
    for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
      let project = each_array_2[$$index_3];
      const each_array_3 = ensure_array_like(project.techStack.slice(0, 3));
      $$payload.out.push(`<div class="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">`);
      if (project.imageUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div class="aspect-video overflow-hidden rounded-lg mb-4"><img${attr("src", project.imageUrl)}${attr("alt", project.title)} class="h-full w-full object-cover object-center transition-transform group-hover:scale-105"/></div>`);
      } else {
        $$payload.out.push("<!--[!-->");
        if (project.videoUrl) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<div class="aspect-video overflow-hidden rounded-lg mb-4"><video${attr("src", project.videoUrl)}${attr("title", project.title)} class="h-full w-full object-cover object-center" autoplay muted loop></video></div>`);
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]--> <div class="flex-1"><h3 class="text-lg font-semibold text-black dark:text-white">${escape_html(project.title)}</h3> <p class="mt-2 text-sm text-black dark:text-white line-clamp-3">${escape_html(project.description)}</p> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let tech = each_array_3[$$index_2];
        $$payload.out.push(`<span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/20">${escape_html(tech)}</span>`);
      }
      $$payload.out.push(`<!--]--> `);
      if (project.techStack.length > 3) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<span class="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-400/20">+${escape_html(project.techStack.length - 3)} more</span>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></div> <div class="mt-6 flex items-center gap-2">`);
      if (project.liveUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<a${attr("href", project.liveUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors" aria-label="View live demo">`);
        Icons($$payload, { name: "external", size: 16 });
        $$payload.out.push(`<!----></a>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--> `);
      if (project.githubUrl) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<a${attr("href", project.githubUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2 text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors" aria-label="View source code">`);
        Icons($$payload, { name: "github", size: 16 });
        $$payload.out.push(`<!----></a>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></div></div></div>`);
    }
    $$payload.out.push(`<!--]--></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div>`);
  pop();
}
export {
  _page as default
};
