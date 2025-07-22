// @ts-nocheck
import { getAboutContent } from "$lib/content.ts";
import type { PageServerLoad } from "./$types";

export const load = async () => {
  const aboutContent = await getAboutContent();

  return {
    aboutContent,
  };
};
;null as any as PageServerLoad;