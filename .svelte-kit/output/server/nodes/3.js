import * as server from '../entries/pages/about/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BszvO5NN.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DAEpXGSt.js","_app/immutable/chunks/BEZt_Tco.js"];
export const stylesheets = [];
export const fonts = [];
