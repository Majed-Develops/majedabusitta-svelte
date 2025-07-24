import * as server from '../entries/pages/projects/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.DaAv8ANT.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BmIPGj5X.js","_app/immutable/chunks/TMDQaXup.js","_app/immutable/chunks/hGDXmQVd.js","_app/immutable/chunks/CdlsUkWG.js","_app/immutable/chunks/BoYayNJO.js","_app/immutable/chunks/6FRl9e4y.js","_app/immutable/chunks/CnCqLEN_.js","_app/immutable/chunks/B3WSMgp5.js","_app/immutable/chunks/CUAHUuVc.js"];
export const stylesheets = [];
export const fonts = [];
