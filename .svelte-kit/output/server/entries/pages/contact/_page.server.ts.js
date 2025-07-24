import { c as getContactInfo } from "../../../chunks/content.js";
const load = async () => {
  const contactInfo = await getContactInfo();
  return {
    contactInfo
  };
};
export {
  load
};
