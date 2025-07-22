import { F as ensure_array_like, O as head, G as attr, I as escape_html, K as stringify, B as pop, z as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.posts);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Blog - Majed Abu Sitta</title>`;
  });
  $$payload.out.push(`<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"><div class="mx-auto max-w-2xl text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Blog</h1> <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Thoughts, tutorials, and insights on web development and technology.</p></div> <div class="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let post = each_array[$$index_1];
    const each_array_1 = ensure_array_like(post.tags);
    $$payload.out.push(`<article class="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"><div class="flex items-center gap-x-4 text-xs"><time${attr("datetime", post.date)} class="text-gray-500 dark:text-gray-400">${escape_html(new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))}</time> <div class="flex gap-2"><!--[-->`);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tag = each_array_1[$$index];
      $$payload.out.push(`<span class="relative z-10 rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30">${escape_html(tag)}</span>`);
    }
    $$payload.out.push(`<!--]--></div></div> <div class="group relative max-w-xl"><h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"><a${attr("href", `/blog/${stringify(post.slug)}`)}><span class="absolute inset-0"></span> ${escape_html(post.title)}</a></h3> <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300 line-clamp-3">${escape_html(post.excerpt)}</p></div></article>`);
  }
  $$payload.out.push(`<!--]--></div></div>`);
  pop();
}
export {
  _page as default
};
