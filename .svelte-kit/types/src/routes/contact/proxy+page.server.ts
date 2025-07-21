// @ts-nocheck
import { getContactInfo } from "$lib/content.js";
import type { PageServerLoad } from "./$types";

export const load = async () => {
  const contactInfo = await getContactInfo();

  return {
    contactInfo,
  };
};
;null as any as PageServerLoad;