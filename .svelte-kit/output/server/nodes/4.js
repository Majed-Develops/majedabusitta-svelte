import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.BGz60FxN.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/Bdp2k7T9.js","_app/immutable/chunks/DYYhDx6U.js","_app/immutable/chunks/OyS_cNS9.js","_app/immutable/chunks/aw5bjNSR.js"];
export const stylesheets = [];
export const fonts = [];
