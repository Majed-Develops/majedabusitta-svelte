import { getContactInfo } from "$lib/content.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const contactInfo = await getContactInfo();

  return {
    contactInfo,
  };
};
