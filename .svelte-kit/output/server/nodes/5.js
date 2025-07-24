import * as server from '../entries/pages/blog/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.DoHs35H-.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BmIPGj5X.js","_app/immutable/chunks/TMDQaXup.js","_app/immutable/chunks/CdlsUkWG.js","_app/immutable/chunks/CnCqLEN_.js","_app/immutable/chunks/BoYayNJO.js"];
export const stylesheets = [];
export const fonts = [];
