import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CIOwMttI.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/CUzuRiAr.js","_app/immutable/chunks/5Fo5uJU4.js","_app/immutable/chunks/BMldH2fS.js","_app/immutable/chunks/BQWNlv-X.js"];
export const stylesheets = [];
export const fonts = [];
