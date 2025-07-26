import * as server from '../entries/pages/blog/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CR_cDOm9.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/Bdp2k7T9.js","_app/immutable/chunks/DYYhDx6U.js","_app/immutable/chunks/OyS_cNS9.js","_app/immutable/chunks/Drl81nsf.js","_app/immutable/chunks/aw5bjNSR.js"];
export const stylesheets = [];
export const fonts = [];
