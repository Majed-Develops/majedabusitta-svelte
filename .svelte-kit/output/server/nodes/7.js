import * as server from '../entries/pages/projects/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.B6wLWyv3.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/CUzuRiAr.js","_app/immutable/chunks/5Fo5uJU4.js","_app/immutable/chunks/-CqHY3Zh.js","_app/immutable/chunks/BMldH2fS.js","_app/immutable/chunks/BQWNlv-X.js","_app/immutable/chunks/tv6YaGTs.js","_app/immutable/chunks/ffRaEYwX.js","_app/immutable/chunks/Bd8QijTW.js","_app/immutable/chunks/BIk7rPeI.js"];
export const stylesheets = [];
export const fonts = [];
