// @ts-nocheck
import { getResumeData } from "$lib/content.js";
import type { PageServerLoad } from "./$types";

export const load = async () => {
  const resumeData = await getResumeData();

  return {
    resumeData,
  };
};
;null as any as PageServerLoad;