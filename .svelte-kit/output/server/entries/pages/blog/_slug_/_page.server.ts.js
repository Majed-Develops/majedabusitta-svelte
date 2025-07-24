import { b as getBlogPost } from "../../../../chunks/content.js";
import { error } from "@sveltejs/kit";
const load = async ({ params }) => {
  const post = await getBlogPost(params.slug);
  if (!post) {
    throw error(404, "Post not found");
  }
  return {
    post
  };
};
export {
  load
};
