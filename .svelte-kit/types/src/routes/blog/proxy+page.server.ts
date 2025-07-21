// @ts-nocheck
import { getBlogPosts } from "$lib/content.js";
import type { PageServerLoad } from "./$types";

export const load = async () => {
  const posts = await getBlogPosts();

  return {
    posts,
  };
};
;null as any as PageServerLoad;