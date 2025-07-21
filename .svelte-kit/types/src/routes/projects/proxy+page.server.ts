// @ts-nocheck
import { getProjects } from "$lib/content.js";
import type { PageServerLoad } from "./$types";

export const load = async () => {
  const projects = await getProjects();

  return {
    projects,
  };
};
;null as any as PageServerLoad;