import { getBlogPost } from "$lib/content.js";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const post = await getBlogPost(params.slug);

  if (!post) {
    throw error(404, "Post not found");
  }

  return {
    post,
  };
};
