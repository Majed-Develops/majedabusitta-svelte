import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.BpoNuq1s.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DAEpXGSt.js","_app/immutable/chunks/CxyGuWJF.js","_app/immutable/chunks/D77lYZpp.js","_app/immutable/chunks/DQxm2mp7.js"];
export const stylesheets = [];
export const fonts = [];
