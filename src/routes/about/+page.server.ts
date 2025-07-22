import { getAboutContent } from "$lib/content.ts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const aboutContent = await getAboutContent();

  return {
    aboutContent,
  };
};
