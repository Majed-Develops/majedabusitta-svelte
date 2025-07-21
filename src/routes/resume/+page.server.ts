import { getResumeData } from "$lib/content.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const resumeData = await getResumeData();

  return {
    resumeData,
  };
};
