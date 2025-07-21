import { getBlogPosts } from "$lib/content.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const posts = await getBlogPosts();

  return {
    posts,
  };
};
