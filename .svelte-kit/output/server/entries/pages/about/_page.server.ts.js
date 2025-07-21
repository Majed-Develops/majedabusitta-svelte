import { g as getAboutContent } from "../../../chunks/content.js";
const load = async () => {
  const aboutContent = await getAboutContent();
  return {
    aboutContent
  };
};
export {
  load
};
