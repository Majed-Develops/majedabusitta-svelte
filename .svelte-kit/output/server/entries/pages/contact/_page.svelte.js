import { O as head, G as attr, J as escape_html, K as stringify, B as pop, z as push } from "../../../chunks/index.js";
import { I as Icons } from "../../../chunks/Icons.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let isSubmitting = false;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Contact - Majed Abu Sitta</title>`;
  });
  $$payload.out.push(`<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"><div class="mx-auto max-w-2xl text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Get in Touch</h1> <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">I'd love to hear from you! Whether you have a project in mind or just want to connect.</p></div> <div class="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2"><div class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h2> <form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label> <input type="text" name="name" id="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"/></div> <div><label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label> <input type="email" name="email" id="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"/></div> <div><label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label> <input type="text" name="subject" id="subject" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"/></div> <div><label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label> <textarea name="message" id="message" rows="6" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"></textarea></div> <button type="submit"${attr("disabled", isSubmitting, true)} class="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">${escape_html("Send Message")}</button> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></form></div> <div class="space-y-8"><div class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2> <div class="space-y-6"><div class="flex items-center space-x-4"><div class="flex-shrink-0">`);
  Icons($$payload, {
    name: "email",
    size: 24,
    class: "h-6 w-6 text-blue-600 dark:text-blue-400"
  });
  $$payload.out.push(`<!----></div> <div><p class="text-sm font-medium text-gray-900 dark:text-white">Email</p> <a${attr("href", `mailto:${stringify(data.contactInfo.email)}`)} class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">${escape_html(data.contactInfo.email)}</a></div></div> <div><p class="text-sm font-medium text-gray-900 dark:text-white mb-3">Connect with me</p> <div class="flex space-x-4"><a${attr("href", data.contactInfo.socialLinks.github)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors" aria-label="GitHub">`);
  Icons($$payload, { name: "github", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a> <a${attr("href", data.contactInfo.socialLinks.linkedin)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">`);
  Icons($$payload, { name: "linkedin", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a> <a${attr("href", data.contactInfo.socialLinks.hackerone)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors" aria-label="HackerOne">`);
  Icons($$payload, { name: "hackerone", size: 24, class: "h-6 w-6" });
  $$payload.out.push(`<!----></a></div></div> <div><p class="text-sm font-medium text-gray-900 dark:text-white">Availability</p> <p class="text-gray-600 dark:text-gray-300">${escape_html(data.contactInfo.availability)}</p></div></div></div></div></div></div>`);
  pop();
}
export {
  _page as default
};
