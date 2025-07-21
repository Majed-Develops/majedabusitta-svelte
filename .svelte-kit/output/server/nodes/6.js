import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.B9g1xEzq.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BuiRv9-c.js","_app/immutable/chunks/80k8pxB6.js","_app/immutable/chunks/DPDVlsZ5.js","_app/immutable/chunks/D_OTPUGK.js","_app/immutable/chunks/JFO7_2nz.js","_app/immutable/chunks/WoaML2Lz.js","_app/immutable/chunks/BGlkFFLy.js","_app/immutable/chunks/BcV4gcyS.js"];
export const stylesheets = [];
export const fonts = [];
