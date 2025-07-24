import * as server from '../entries/pages/resume/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/resume/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.B8PLReT8.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BmIPGj5X.js","_app/immutable/chunks/TMDQaXup.js","_app/immutable/chunks/CdlsUkWG.js","_app/immutable/chunks/BoYayNJO.js","_app/immutable/chunks/6FRl9e4y.js","_app/immutable/chunks/CnCqLEN_.js","_app/immutable/chunks/B3WSMgp5.js","_app/immutable/chunks/CUAHUuVc.js"];
export const stylesheets = [];
export const fonts = [];
