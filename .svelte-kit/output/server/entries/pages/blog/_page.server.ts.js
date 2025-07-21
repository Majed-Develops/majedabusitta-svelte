import { a as getBlogPosts } from "../../../chunks/content.js";
const load = async () => {
  const posts = await getBlogPosts();
  return {
    posts
  };
};
export {
  load
};
