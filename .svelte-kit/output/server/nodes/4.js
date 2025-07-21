import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.BkSOi_VE.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BuiRv9-c.js","_app/immutable/chunks/80k8pxB6.js","_app/immutable/chunks/7oNXADh9.js","_app/immutable/chunks/D_OTPUGK.js"];
export const stylesheets = [];
export const fonts = [];
