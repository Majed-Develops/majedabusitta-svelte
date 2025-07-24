import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Cl7XQe2c.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BmIPGj5X.js","_app/immutable/chunks/TMDQaXup.js","_app/immutable/chunks/CdlsUkWG.js","_app/immutable/chunks/BoYayNJO.js"];
export const stylesheets = [];
export const fonts = [];
