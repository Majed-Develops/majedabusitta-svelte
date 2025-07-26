import { F as ensure_array_like, O as head, G as attr, I as escape_html, B as pop, z as push } from "../../../chunks/index.js";
import { I as Icons } from "../../../chunks/Icons.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.resumeData.sections.experience);
  const each_array_1 = ensure_array_like(data.resumeData.sections.skills);
  const each_array_2 = ensure_array_like(data.resumeData.sections.education);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Resume - Majed Abu Sitta</title>`;
  });
  $$payload.out.push(`<div class="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8"><div class="text-center mb-16"><h1 class="text-4xl font-bold tracking-tight sm:text-6xl"><span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span></h1> <p class="mt-6 text-lg leading-8 text-black dark:text-white">My professional background and experience in web development.</p> <div class="mt-8 flex justify-center gap-4"><a${attr("href", data.resumeData.pdfUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">`);
  Icons($$payload, { name: "download", size: 16 });
  $$payload.out.push(`<!----> Download PDF</a></div> <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Last updated: ${escape_html(new Date(data.resumeData.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))}</p></div> <div class="space-y-12"><section><h2 class="text-2xl font-bold text-black dark:text-white mb-4">Professional Summary</h2> <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"><p class="text-black dark:text-white leading-relaxed">${escape_html(data.resumeData.sections.summary)}</p></div></section> <section><h2 class="text-2xl font-bold text-black dark:text-white mb-6">Experience</h2> <div class="space-y-6"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let job = each_array[$$index];
    $$payload.out.push(`<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2"><div><h3 class="text-lg font-semibold text-black dark:text-white">${escape_html(job.position)}</h3> <p class="text-blue-600 dark:text-blue-400 font-medium">${escape_html(job.company)}</p></div> <span class="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">${escape_html(job.duration)}</span></div> <p class="text-black dark:text-white leading-relaxed">${escape_html(job.description)}</p></div>`);
  }
  $$payload.out.push(`<!--]--></div></section> <section><h2 class="text-2xl font-bold text-black dark:text-white mb-6">Technical Skills</h2> <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="flex flex-wrap gap-3"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let skill = each_array_1[$$index_1];
    $$payload.out.push(`<span class="inline-flex items-center rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/20">${escape_html(skill)}</span>`);
  }
  $$payload.out.push(`<!--]--></div></div></section> <section><h2 class="text-2xl font-bold text-black dark:text-white mb-6">Education</h2> <div class="space-y-4"><!--[-->`);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let edu = each_array_2[$$index_2];
    $$payload.out.push(`<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="flex flex-col sm:flex-row sm:justify-between sm:items-start"><div><h3 class="text-lg font-semibold text-black dark:text-white">${escape_html(edu.degree)}</h3> <p class="text-blue-600 dark:text-blue-400 font-medium">${escape_html(edu.institution)}</p></div> <span class="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">${escape_html(edu.year)}</span></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></section></div></div>`);
  pop();
}
export {
  _page as default
};
