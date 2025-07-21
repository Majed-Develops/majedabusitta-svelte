import { e as getResumeData } from "../../../chunks/content.js";
const load = async () => {
  const resumeData = await getResumeData();
  return {
    resumeData
  };
};
export {
  load
};
