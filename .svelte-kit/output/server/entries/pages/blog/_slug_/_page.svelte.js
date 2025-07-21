import { F as ensure_array_like, O as head, G as attr, J as escape_html, B as pop, z as push } from "../../../../chunks/index.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.post.tags);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(data.post.title)} - Majed Abu Sitta</title>`;
    $$payload2.out.push(`<meta name="description"${attr("content", data.post.excerpt)}/>`);
  });
  $$payload.out.push(`<article class="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8"><div class="mx-auto max-w-3xl"><div class="mb-8"><div class="flex items-center gap-x-4 text-xs text-gray-500 dark:text-gray-400 mb-4"><time${attr("datetime", data.post.date)}>${escape_html(new Date(data.post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))}</time> <div class="flex gap-2"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$payload.out.push(`<span class="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">${escape_html(tag)}</span>`);
  }
  $$payload.out.push(`<!--]--></div></div> <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">${escape_html(data.post.title)}</h1> <p class="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">${escape_html(data.post.excerpt)}</p></div> <div class="prose prose-lg max-w-none dark:prose-invert">${html(data.post.content)}</div> <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"><a href="/blog" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium">← Back to blog</a></div></div></article>`);
  pop();
}
export {
  _page as default
};
