import { d as getProjects } from "../../../chunks/content.js";
const load = async () => {
  const projects = await getProjects();
  return {
    projects
  };
};
export {
  load
};
