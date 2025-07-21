// @ts-nocheck
import { getAboutContent } from "$lib/content.js";
import type { PageServerLoad } from "./$types";

export const load = async () => {
  const aboutContent = await getAboutContent();

  return {
    aboutContent,
  };
};
;null as any as PageServerLoad;