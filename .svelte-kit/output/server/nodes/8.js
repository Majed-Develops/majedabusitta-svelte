import * as server from '../entries/pages/resume/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/resume/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.CAGCIm_z.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BuiRv9-c.js","_app/immutable/chunks/80k8pxB6.js","_app/immutable/chunks/7oNXADh9.js","_app/immutable/chunks/D_OTPUGK.js","_app/immutable/chunks/JFO7_2nz.js","_app/immutable/chunks/WoaML2Lz.js","_app/immutable/chunks/BGlkFFLy.js","_app/immutable/chunks/BcV4gcyS.js"];
export const stylesheets = [];
export const fonts = [];
