import require$$0$3 from "fs";
import require$$1 from "section-matter";
import require$$0 from "js-yaml";
import require$$0$2 from "strip-bom-string";
import require$$0$1 from "kind-of";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { sanitize } from "hast-util-sanitize";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";
const __vite_glob_0_0 = '---\ntitle: "Building Responsive Websites with Tailwind CSS"\ndate: "2024-12-10"\nexcerpt: "Master responsive design with Tailwind CSS utility classes and create websites that look great on all devices."\ntags: ["CSS", "Tailwind", "Responsive Design"]\n---\n\n# Building Responsive Websites with Tailwind CSS\n\nResponsive design is crucial in today\'s multi-device world. Tailwind CSS makes it incredibly easy to build responsive websites with its intuitive utility classes.\n\n## The Mobile-First Approach\n\nTailwind CSS follows a mobile-first approach, meaning styles are applied to mobile devices by default, and larger screens are targeted using responsive prefixes.\n\n```html\n<!-- Base styles for mobile, md: for tablets, lg: for desktop -->\n<div class="text-sm md:text-base lg:text-lg">Responsive text size</div>\n```\n\n## Responsive Breakpoints\n\nTailwind provides five default breakpoints:\n\n- `sm`: 640px and up\n- `md`: 768px and up\n- `lg`: 1024px and up\n- `xl`: 1280px and up\n- `2xl`: 1536px and up\n\n## Common Responsive Patterns\n\n### 1. Grid Layouts\n\n```html\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\n  <!-- Grid items -->\n</div>\n```\n\n### 2. Flexible Navigation\n\n```html\n<nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">\n  <!-- Navigation items -->\n</nav>\n```\n\n### 3. Responsive Typography\n\n```html\n<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">Responsive Heading</h1>\n```\n\n## Tips for Better Responsive Design\n\n1. **Test on Real Devices** - Emulators are good, but real devices give you the true experience\n2. **Consider Touch Targets** - Make buttons and links large enough for fingers\n3. **Optimize Images** - Use responsive images and modern formats like WebP\n4. **Think Content-First** - Design your content hierarchy before adding visual elements\n\n## Conclusion\n\nTailwind CSS makes responsive design straightforward and maintainable. By following these patterns and best practices, you\'ll create websites that provide excellent user experiences across all devices.\n';
const __vite_glob_0_1 = '---\ntitle: "Getting Started with Next.js 15: A Developer\'s Guide"\ndate: "2024-12-15"\nexcerpt: "Learn how to build modern web applications with Next.js 15, covering the latest features and best practices."\ntags: ["Next.js", "React", "Web Development"]\n---\n\n# Getting Started with Next.js 15: A Developer\'s Guide\n\nNext.js has become one of the most popular React frameworks for building modern web applications. With the release of Next.js 15, we\'ve got exciting new features that make development even more enjoyable.\n\n## What\'s New in Next.js 15\n\n### 1. Improved App Router\n\nThe App Router has been refined with better performance and developer experience. The new routing system makes it easier to create complex layouts and handle data fetching.\n\n### 2. Enhanced Server Components\n\nServer Components now have better streaming capabilities and improved hydration, making your apps faster and more responsive.\n\n### 3. Turbopack Improvements\n\nWhile still in beta, Turbopack continues to show impressive performance gains over Webpack, especially for larger applications.\n\n## Getting Started\n\nTo create a new Next.js 15 project:\n\n```bash\nnpx create-next-app@latest my-app\ncd my-app\nnpm run dev\n```\n\n## Best Practices\n\n1. **Use TypeScript** - It catches errors early and improves developer experience\n2. **Leverage Server Components** - They reduce client-side JavaScript and improve performance\n3. **Optimize Images** - Use the built-in Image component for automatic optimization\n4. **Implement Proper SEO** - Use metadata API for better search engine visibility\n\n## Conclusion\n\nNext.js 15 continues to push the boundaries of what\'s possible with React applications. Whether you\'re building a simple portfolio or a complex enterprise application, Next.js provides the tools you need to succeed.\n\nHappy coding!\n';
const __vite_glob_0_2 = '---\ntitle: "Intro to Prompt Engineering for Developers"\ndate: "2025-07-20"\nexcerpt: "Prompt engineering has evolved. Here\'s what it is, how it started, and what developers need to know to build smarter, more useful AI-powered apps."\ntags: ["AI", "Prompt Engineering", "LLMs", "DevTools"]\n---\n\n# Intro to Prompt Engineering for Developers\n\nPrompt engineering is the skill of shaping human intent into structured language that large language models (LLMs) can understand and respond to effectively. But it\'s not just about writing clever inputs — it\'s now part of building full-featured AI applications.\n\nWhether you\'re building a chatbot, a coding assistant, or an internal tool with LLM capabilities, prompt engineering is the entry point between user needs and machine reasoning.\n\n## How Prompt Engineering Started\n\nIn the early ChatGPT days (late 2022 to early 2023), prompting was seen as an art form. People experimented with:\n\n- Phrasing tricks like "Act as a…" or "Let\'s think step by step"\n- Prompt chaining, where outputs fed into new inputs\n- Jailbreaking to bypass content filters\n\nBack then, prompting was the entire interface. It felt magical — and anyone could do it.\n\nAt the time, a good prompt felt like a cheat code.\n\n## How It\'s Evolved\n\nToday in 2025, prompt engineering is still valuable — but the game has changed:\n\n| Then (2022–2023)        | Now (2024–2025)                        |\n| ----------------------- | -------------------------------------- |\n| Prompt = interface      | Prompt = one part of an LLM pipeline   |\n| Mostly manual tinkering | Structured prompts + tools + memory    |\n| Clever wording was key  | Systematic design is key               |\n| Anyone could do it      | Developers need engineering skills too |\n\nModern LLM apps combine:\n\n- Structured system and user prompts\n- Few-shot examples\n- Function calling and tool use\n- Embeddings and vector search\n- Memory/context management\n\nPrompting is no longer about "talking nicely to ChatGPT" — it\'s about designing systems that think and communicate well.\n\n## Core Prompting Techniques for Developers\n\nHere are four common and powerful prompting strategies used in actual development.\n\n### 1. Instructional Prompts\n\nTell the model directly what to do.\n\n```\nSummarize the following blog post into a 3-sentence executive summary.\n```\n\nUseful for: content generation, summarization, translation, analysis.\n\n### 2. Role-Based Prompts\n\nAssign a role or identity to the model.\n\n```\nYou are a senior software engineer. Explain the difference between REST and GraphQL to a junior developer.\n```\n\nUseful for: tutoring, simulation, support bots, onboarding tools.\n\n### 3. Few-Shot Prompts\n\nProvide input-output examples to guide structure or tone.\n\n```\nQ: What is a closure in JavaScript?\nA: A closure is a function that remembers the variables from its lexical scope even when it\'s run outside that scope.\n\nQ: What is a promise in JavaScript?\nA:\n```\n\nUseful for: Q&A, custom formatting, structured responses.\n\n### 4. Chain-of-Thought Prompts\n\nEncourage step-by-step reasoning before giving the answer.\n\n```\nLet\'s think step by step:\nA farmer has 15 apples. He gives 3 to each of his 4 children. How many apples does he have left?\n```\n\nUseful for: planning, math, logic, decision-making tasks.\n\n## Real-World Use Cases\n\nPrompt engineering is now embedded into production systems. Some examples:\n\n### Code Review Assistant\n\n```\nYou are a code reviewer. Analyze the following code for logic bugs, readability issues, and suggest improvements. Output in markdown.\n\nCode:\n${userCode}\n```\n\n### AI Function Routing\n\nUsed in OpenAI\'s function calling or custom GPTs.\n\n```\nYou are an assistant that helps plan events. When the user mentions a date or location, use the create_event() function.\n```\n\n### Custom System Personas\n\nUsed in assistant-like tools, da\'wah apps, or productivity bots.\n\n```\nYou are a calm, helpful Islamic teacher. Speak to beginners, avoid complex terms, and offer references when possible.\n```\n\n## Tips to Prompt Like a Developer\n\n1. Treat prompts like code: test, modularize, version-control them\n2. Be specific: models don\'t read minds — state what you want clearly\n3. Control formatting: ask for markdown, bullet lists, or JSON\n4. Don\'t rely on memory: repeat relevant info if needed\n5. Think contextually: combine prompt design with tool logic and memory\n\n## Common Mistakes to Avoid\n\n- Vague prompts like "help me with this" — help how, and with what?\n- Assuming the model understands your app state or logic — it doesn\'t\n- Expecting perfect repeatability — LLMs are probabilistic by design\n- Writing prompts like prose instead of clear instructions\n\n## The Role of Prompting in 2025\n\nPrompt engineering isn\'t dead — it\'s just no longer the whole picture. It\'s now one layer of the LLM application stack.\n\nTo stay ahead, developers need to combine:\n\n- Clear, effective prompting\n- Smart system design\n- APIs, tools, and context management\n- Testing and iteration\n\nIf you can do that, you\'re not just a prompt engineer — you\'re building the future of human-computer interaction.\n\n## Coming Next\n\nIn the next post, we\'ll walk through building an actual LLM-powered web app using Vite, React, and the OpenAI API — with real prompt logic and live testing.\n\nStay tuned.\n';
const __vite_glob_1_0 = `---
title: "About me"
---

I'm a prompt engineer and future full-stack developer who thrives on building meaningful, real-world solutions with modern web tools. From elegant UIs to powerful backends, I enjoy turning ideas into beautiful, functional applications.

While currently pursuing a bachelor's in Cybersecurity (July 2025), I continue to sharpen my skills across the stack — from React and Svelte on the frontend to Node.js on the backend — blending security awareness with development finesse.

## Skills

- Prompt Engineering (Custom GPT Prompts, Instruction Design, Prompt Debugging)
- Problem Solving & Debugging
- Full-Stack Development (in progress)

## Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

## Tools and Platforms

- Cloudflare Pages (deployment)
- VS Code
- Terminal / CLI
- GitHub

## Experience

- Prompt Engineer
- Social Media Manager
- Developing tools to help business productivity

## Soft Skills

- Self-Learning & Curiosity
- Adaptability
- Clear Written Communication
- Creative Problem Solving

## Interests

- Clean code architecture
- Performance optimization
- Developer experience
- Teaching and mentoring
- Cybersecurity
- Artificial Intelligence
`;
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var engines$2 = { exports: {} };
(function(module, exports) {
  const yaml = require$$0;
  const engines = module.exports;
  engines.yaml = {
    parse: yaml.safeLoad.bind(yaml),
    stringify: yaml.safeDump.bind(yaml)
  };
  engines.json = {
    parse: JSON.parse.bind(JSON),
    stringify: function(obj, options2) {
      const opts = Object.assign({ replacer: null, space: 2 }, options2);
      return JSON.stringify(obj, opts.replacer, opts.space);
    }
  };
  engines.javascript = {
    parse: function parse(str, options, wrap) {
      try {
        if (wrap !== false) {
          str = "(function() {\nreturn " + str.trim() + ";\n}());";
        }
        return eval(str) || {};
      } catch (err) {
        if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) {
          return parse(str, options, false);
        }
        throw new SyntaxError(err);
      }
    },
    stringify: function() {
      throw new Error("stringifying JavaScript is not supported");
    }
  };
})(engines$2);
var enginesExports = engines$2.exports;
var utils$3 = {};
(function(exports2) {
  const stripBom = require$$0$2;
  const typeOf2 = require$$0$1;
  exports2.define = function(obj, key, val) {
    Reflect.defineProperty(obj, key, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: val
    });
  };
  exports2.isBuffer = function(val) {
    return typeOf2(val) === "buffer";
  };
  exports2.isObject = function(val) {
    return typeOf2(val) === "object";
  };
  exports2.toBuffer = function(input) {
    return typeof input === "string" ? Buffer.from(input) : input;
  };
  exports2.toString = function(input) {
    if (exports2.isBuffer(input)) return stripBom(String(input));
    if (typeof input !== "string") {
      throw new TypeError("expected input to be a string or buffer");
    }
    return stripBom(input);
  };
  exports2.arrayify = function(val) {
    return val ? Array.isArray(val) ? val : [val] : [];
  };
  exports2.startsWith = function(str2, substr, len) {
    if (typeof len !== "number") len = substr.length;
    return str2.slice(0, len) === substr;
  };
})(utils$3);
const engines$1 = enginesExports;
const utils$2 = utils$3;
var defaults$4 = function(options2) {
  const opts = Object.assign({}, options2);
  opts.delimiters = utils$2.arrayify(opts.delims || opts.delimiters || "---");
  if (opts.delimiters.length === 1) {
    opts.delimiters.push(opts.delimiters[0]);
  }
  opts.language = (opts.language || opts.lang || "yaml").toLowerCase();
  opts.engines = Object.assign({}, engines$1, opts.parsers, opts.engines);
  return opts;
};
var engine = function(name, options2) {
  let engine2 = options2.engines[name] || options2.engines[aliase(name)];
  if (typeof engine2 === "undefined") {
    throw new Error('gray-matter engine "' + name + '" is not registered');
  }
  if (typeof engine2 === "function") {
    engine2 = { parse: engine2 };
  }
  return engine2;
};
function aliase(name) {
  switch (name.toLowerCase()) {
    case "js":
    case "javascript":
      return "javascript";
    case "coffee":
    case "coffeescript":
    case "cson":
      return "coffee";
    case "yaml":
    case "yml":
      return "yaml";
    default: {
      return name;
    }
  }
}
const typeOf$1 = require$$0$1;
const getEngine$1 = engine;
const defaults$3 = defaults$4;
var stringify$2 = function(file, data, options2) {
  if (data == null && options2 == null) {
    switch (typeOf$1(file)) {
      case "object":
        data = file.data;
        options2 = {};
        break;
      case "string":
        return file;
      default: {
        throw new TypeError("expected file to be a string or object");
      }
    }
  }
  const str2 = file.content;
  const opts = defaults$3(options2);
  if (data == null) {
    if (!opts.data) return file;
    data = opts.data;
  }
  const language = file.language || opts.language;
  const engine2 = getEngine$1(language, opts);
  if (typeof engine2.stringify !== "function") {
    throw new TypeError('expected "' + language + '.stringify" to be a function');
  }
  data = Object.assign({}, file.data, data);
  const open = opts.delimiters[0];
  const close = opts.delimiters[1];
  const matter2 = engine2.stringify(data, options2).trim();
  let buf = "";
  if (matter2 !== "{}") {
    buf = newline(open) + newline(matter2) + newline(close);
  }
  if (typeof file.excerpt === "string" && file.excerpt !== "") {
    if (str2.indexOf(file.excerpt.trim()) === -1) {
      buf += newline(file.excerpt) + newline(close);
    }
  }
  return buf + newline(str2);
};
function newline(str2) {
  return str2.slice(-1) !== "\n" ? str2 + "\n" : str2;
}
const defaults$2 = defaults$4;
var excerpt$1 = function(file, options2) {
  const opts = defaults$2(options2);
  if (file.data == null) {
    file.data = {};
  }
  if (typeof opts.excerpt === "function") {
    return opts.excerpt(file, opts);
  }
  const sep = file.data.excerpt_separator || opts.excerpt_separator;
  if (sep == null && (opts.excerpt === false || opts.excerpt == null)) {
    return file;
  }
  const delimiter = typeof opts.excerpt === "string" ? opts.excerpt : sep || opts.delimiters[0];
  const idx = file.content.indexOf(delimiter);
  if (idx !== -1) {
    file.excerpt = file.content.slice(0, idx);
  }
  return file;
};
const typeOf = require$$0$1;
const stringify$1 = stringify$2;
const utils$1 = utils$3;
var toFile$1 = function(file) {
  if (typeOf(file) !== "object") {
    file = { content: file };
  }
  if (typeOf(file.data) !== "object") {
    file.data = {};
  }
  if (file.contents && file.content == null) {
    file.content = file.contents;
  }
  utils$1.define(file, "orig", utils$1.toBuffer(file.content));
  utils$1.define(file, "language", file.language || "");
  utils$1.define(file, "matter", file.matter || "");
  utils$1.define(file, "stringify", function(data, options2) {
    if (options2 && options2.language) {
      file.language = options2.language;
    }
    return stringify$1(file, data, options2);
  });
  file.content = utils$1.toString(file.content);
  file.isEmpty = false;
  file.excerpt = "";
  return file;
};
const getEngine = engine;
const defaults$1 = defaults$4;
var parse$1 = function(language, str2, options2) {
  const opts = defaults$1(options2);
  const engine2 = getEngine(language, opts);
  if (typeof engine2.parse !== "function") {
    throw new TypeError('expected "' + language + '.parse" to be a function');
  }
  return engine2.parse(str2, opts);
};
const fs = require$$0$3;
const sections$1 = require$$1;
const defaults = defaults$4;
const stringify = stringify$2;
const excerpt = excerpt$1;
const engines = enginesExports;
const toFile = toFile$1;
const parse = parse$1;
const utils = utils$3;
function matter(input, options2) {
  if (input === "") {
    return { data: {}, content: input, excerpt: "", orig: input };
  }
  let file = toFile(input);
  const cached = matter.cache[file.content];
  if (!options2) {
    if (cached) {
      file = Object.assign({}, cached);
      file.orig = cached.orig;
      return file;
    }
    matter.cache[file.content] = file;
  }
  return parseMatter(file, options2);
}
function parseMatter(file, options2) {
  const opts = defaults(options2);
  const open = opts.delimiters[0];
  const close = "\n" + opts.delimiters[1];
  let str2 = file.content;
  if (opts.language) {
    file.language = opts.language;
  }
  const openLen = open.length;
  if (!utils.startsWith(str2, open, openLen)) {
    excerpt(file, opts);
    return file;
  }
  if (str2.charAt(openLen) === open.slice(-1)) {
    return file;
  }
  str2 = str2.slice(openLen);
  const len = str2.length;
  const language = matter.language(str2, opts);
  if (language.name) {
    file.language = language.name;
    str2 = str2.slice(language.raw.length);
  }
  let closeIndex = str2.indexOf(close);
  if (closeIndex === -1) {
    closeIndex = len;
  }
  file.matter = str2.slice(0, closeIndex);
  const block = file.matter.replace(/^\s*#[^\n]+/gm, "").trim();
  if (block === "") {
    file.isEmpty = true;
    file.empty = file.content;
    file.data = {};
  } else {
    file.data = parse(file.language, file.matter, opts);
  }
  if (closeIndex === len) {
    file.content = "";
  } else {
    file.content = str2.slice(closeIndex + close.length);
    if (file.content[0] === "\r") {
      file.content = file.content.slice(1);
    }
    if (file.content[0] === "\n") {
      file.content = file.content.slice(1);
    }
  }
  excerpt(file, opts);
  if (opts.sections === true || typeof opts.section === "function") {
    sections$1(file, opts.section);
  }
  return file;
}
matter.engines = engines;
matter.stringify = function(file, data, options2) {
  if (typeof file === "string") file = matter(file, options2);
  return stringify(file, data, options2);
};
matter.read = function(filepath, options2) {
  const str2 = fs.readFileSync(filepath, "utf8");
  const file = matter(str2, options2);
  file.path = filepath;
  return file;
};
matter.test = function(str2, options2) {
  return utils.startsWith(str2, defaults(options2).delimiters[0]);
};
matter.language = function(str2, options2) {
  const opts = defaults(options2);
  const open = opts.delimiters[0];
  if (matter.test(str2)) {
    str2 = str2.slice(open.length);
  }
  const language = str2.slice(0, str2.search(/\r?\n/));
  return {
    raw: language,
    name: language ? language.trim() : ""
  };
};
matter.cache = {};
matter.clearCache = function() {
  matter.cache = {};
};
var grayMatter = matter;
const matter$1 = /* @__PURE__ */ getDefaultExportFromCjs(grayMatter);
const remark = unified().use(remarkParse).use(remarkStringify).freeze();
const emptyOptions = {};
function remarkHtml(options2) {
  const self = this;
  const { handlers, sanitize: clean, ...toHtmlOptions } = options2 || emptyOptions;
  let allowDangerousHtml = false;
  let schema;
  if (typeof clean === "boolean") {
    allowDangerousHtml = !clean;
  } else if (clean) {
    schema = clean;
  }
  self.compiler = compiler;
  function compiler(tree, file) {
    const hast = toHast(tree, { handlers, allowDangerousHtml });
    const safeHast = allowDangerousHtml ? hast : sanitize(hast, schema);
    const result = toHtml(safeHast, { ...toHtmlOptions, allowDangerousHtml });
    if (file.extname) {
      file.extname = ".html";
    }
    return tree && tree.type === "root" && result && /[^\r\n]/.test(result.charAt(result.length - 1)) ? result + "\n" : result;
  }
}
const projectsData = [
  {
    id: "score-buddies",
    title: "Score Buddies",
    description: "A full-stack task management application built with SvelteKit, featuring real-time collaboration, authentication, and beautiful UI.",
    techStack: [
      "SvelteKit",
      "TypeScript",
      "SQLite",
      "Drizzle ORM",
      "Lucia Auth"
    ],
    liveUrl: "https://score-buddies.pages.dev/",
    githubUrl: "https://github.com/Majed-Develops/Score-Buddies",
    imageUrl: "/images/Score_buddies.png",
    videoUrl: "/videos/task-manager-demo.mp4",
    featured: true
  },
  {
    id: "score-buddies-simple",
    title: "Score Buddies (Simple)",
    description: "A multi-theme score tracking application built with Svelte 5, featuring five unique interfaces, real-time scoring, and responsive design.",
    techStack: [
      "Svelte 5",
      "Vite",
      "JavaScript",
      "CSS"
    ],
    liveUrl: "https://score-buddies-versions.pages.dev/",
    githubUrl: "https://github.com/Majed-Develops/Score-buddies-versions",
    imageUrl: "/images/Score_buddies_versions.png",
    videoUrl: "/videos/task-manager-demo.mp4",
    featured: true
  },
  {
    id: "balagh",
    title: "Balagh",
    description: "A modern React application helping Muslims share their faith with beautiful resources and tools.",
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Radix UI"
    ],
    liveUrl: "https://balagh.pages.dev/",
    githubUrl: "https://github.com/Majed-Develops/balagh",
    imageUrl: "/images/balagh.png",
    featured: true
  },
  {
    id: "study-buddy",
    title: "Study Buddy",
    description: "Study Buddy is a responsive React 19 + Vite app combining a Pomodoro timer and exam system using modern JS, custom CSS, hooks, and Web Audio API.",
    techStack: [
      "React 19",
      "Vite",
      "Javescript ES",
      "CSS"
    ],
    liveUrl: "https://study-buddy-aln.pages.dev/",
    githubUrl: "https://github.com/Majed-Develops/study-buddy",
    imageUrl: "/images/study-buddy.png",
    featured: true
  },
  {
    id: "portfolio-website",
    title: "majedabusitta - svelte",
    description: "My portfolio in Svelte instead of React/Next.js - featuring smooth animations, multiple themes, and modern design",
    techStack: [
      "SvelteKit",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ],
    liveUrl: "https://f2369a32.majedabusitta-svelte.pages.dev/",
    githubUrl: "https://github.com/majed-develops/majedabusitta-svelte",
    imageUrl: "/images/majedabusitta-svelte.png",
    featured: true
  }
];
const email = "majedbashir.dev@gmail.com";
const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
const socialLinks = {
  github: "https://github.com/majed-develops",
  linkedin: "https://www.linkedin.com/in/majed-bashir",
  hackerone: "https://hackerone.com/mr_devz"
};
const availability = "Currently available for freelance projects and full-time opportunities";
const contactData = {
  email,
  formspreeEndpoint,
  socialLinks,
  availability
};
const pdfUrl = "/resume/Majed-Abu-Sitta-Resume.pdf";
const lastUpdated = "2025-7-20";
const sections = {
  summary: "Although early in my development career, I've actively worked on real-world projects that sharpen my skills in building modern, responsive web applications. I've developed interactive tools, educational games, and productivity apps as part of my personal learning journey and client work — all with a strong focus on clean code, usability, and performance.",
  experience: [
    {
      company: "ClicTec Solutions",
      position: "Social Media Manager",
      duration: "March 2024 - October 2024",
      description: [
        "Created educational and industry-relevant content to promote cybersecurity awareness, simplify complex technical topics, and highlight the company’s services.",
        "Monitored trends in cybersecurity and tech to keep the brand voice relevant and authoritative"
      ]
    }
  ],
  skills: [
    "JavaScript",
    "Prompt Engineering",
    "Full-stack developer (in progress)",
    "Problem Solving & Debugging",
    "GitHub"
  ],
  education: [
    {
      institution: "University Kuala Lumpur",
      degree: "Bachelor of Computer System Security",
      year: "Present"
    }
  ]
};
const resumeData = {
  pdfUrl,
  lastUpdated,
  sections
};
const blogPostModules = /* @__PURE__ */ Object.assign({ "../../content/posts/building-responsive-websites.md": __vite_glob_0_0, "../../content/posts/getting-started-with-nextjs.md": __vite_glob_0_1, "../../content/posts/intro-to-prompt-engineering-for-developers.md": __vite_glob_0_2 });
const aboutModule = /* @__PURE__ */ Object.assign({ "../../content/about.md": __vite_glob_1_0 });
const blogPostsContent = {};
for (const [path, content] of Object.entries(blogPostModules)) {
  const filename = path.split("/").pop()?.replace(".md", "") || "";
  blogPostsContent[filename] = content;
}
const aboutMd = Object.values(aboutModule)[0] || "";
async function getProjects() {
  return projectsData;
}
async function getContactInfo() {
  return contactData;
}
async function getResumeData() {
  return resumeData;
}
async function getAboutContent() {
  try {
    if (!aboutMd || typeof aboutMd !== "string") {
      throw new Error("About markdown content is not available");
    }
    const { content } = matter$1(aboutMd);
    const processedContent = await remark().use(remarkHtml).process(content);
    return processedContent.toString();
  } catch (error) {
    console.error("Error processing about content:", error);
    try {
      const contentAfterFrontmatter = aboutMd.replace(/^---[\s\S]*?---\n?/, "");
      const processedContent = await remark().use(remarkHtml).process(contentAfterFrontmatter || "# About\n\nContent unavailable.");
      return processedContent.toString();
    } catch (fallbackError) {
      console.error("Fallback processing failed:", fallbackError);
      return "<h1>About</h1><p>Content unavailable at the moment.</p>";
    }
  }
}
async function getBlogPosts() {
  const posts = await Promise.all(
    Object.entries(blogPostsContent).map(async ([slug, fileContent]) => {
      const { data, content } = matter$1(fileContent);
      const processedContent = await remark().use(remarkHtml).process(content);
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags || [],
        content: processedContent.toString()
      };
    })
  );
  return posts.sort((a, b) => a.date > b.date ? -1 : 1);
}
async function getBlogPost(slug) {
  const fileContent = blogPostsContent[slug];
  if (!fileContent) {
    return null;
  }
  const { data, content } = matter$1(fileContent);
  const processedContent = await remark().use(remarkHtml).process(content);
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    tags: data.tags || [],
    content: processedContent.toString()
  };
}
export {
  getBlogPosts as a,
  getBlogPost as b,
  getContactInfo as c,
  getProjects as d,
  getResumeData as e,
  getAboutContent as g
};
