import * as server from '../entries/pages/resume/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/resume/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.MwNG8rgS.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DAEpXGSt.js","_app/immutable/chunks/CxyGuWJF.js","_app/immutable/chunks/D77lYZpp.js","_app/immutable/chunks/DQxm2mp7.js","_app/immutable/chunks/kAJrnh3w.js","_app/immutable/chunks/BEZt_Tco.js","_app/immutable/chunks/C00i2GAA.js","_app/immutable/chunks/BtPuZwxi.js"];
export const stylesheets = [];
export const fonts = [];
