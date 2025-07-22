export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["file.svg","globe.svg","images/Score_buddies.png","images/Score_buddies_versions.png","images/balagh.png","images/majedabusitta-svelte.png","images/study-buddy.png","next.svg","vercel.svg","window.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.U5js6cRG.js",app:"_app/immutable/entry/app.c-BhbwXW.js",imports:["_app/immutable/entry/start.U5js6cRG.js","_app/immutable/chunks/Bp1dw-TG.js","_app/immutable/chunks/DqYi2RYN.js","_app/immutable/chunks/DAEpXGSt.js","_app/immutable/chunks/CxyGuWJF.js","_app/immutable/chunks/BtPuZwxi.js","_app/immutable/entry/app.c-BhbwXW.js","_app/immutable/chunks/DAEpXGSt.js","_app/immutable/chunks/CxyGuWJF.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DqYi2RYN.js","_app/immutable/chunks/DOURk1GL.js","_app/immutable/chunks/C00i2GAA.js","_app/immutable/chunks/BtPuZwxi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
