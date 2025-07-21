import { getProjects } from "$lib/content.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const projects = await getProjects();

  return {
    projects,
  };
};
