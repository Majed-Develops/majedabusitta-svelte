import { getAboutContent } from "$lib/content.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const aboutContent = await getAboutContent();

  return {
    aboutContent,
  };
};
