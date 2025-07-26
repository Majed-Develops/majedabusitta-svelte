import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.-gDhtYT7.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/Bdp2k7T9.js","_app/immutable/chunks/DYYhDx6U.js","_app/immutable/chunks/Ptpkwzz3.js","_app/immutable/chunks/aw5bjNSR.js","_app/immutable/chunks/CB4rgJj8.js","_app/immutable/chunks/Drl81nsf.js","_app/immutable/chunks/BCAJF5o5.js","_app/immutable/chunks/BVhK3JSu.js"];
export const stylesheets = [];
export const fonts = [];
