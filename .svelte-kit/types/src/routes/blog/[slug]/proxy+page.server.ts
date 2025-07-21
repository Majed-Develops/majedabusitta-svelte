// @ts-nocheck
import { getBlogPost } from "$lib/content.js";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
  const post = await getBlogPost(params.slug);

  if (!post) {
    throw error(404, "Post not found");
  }

  return {
    post,
  };
};
