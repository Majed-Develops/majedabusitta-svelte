import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
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
const aboutMd = `---
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
const buildingResponsiveWebsitesMd = '---\ntitle: "Building Responsive Websites with Tailwind CSS"\ndate: "2024-12-10"\nexcerpt: "Master responsive design with Tailwind CSS utility classes and create websites that look great on all devices."\ntags: ["CSS", "Tailwind", "Responsive Design"]\n---\n\n# Building Responsive Websites with Tailwind CSS\n\nResponsive design is crucial in today\'s multi-device world. Tailwind CSS makes it incredibly easy to build responsive websites with its intuitive utility classes.\n\n## The Mobile-First Approach\n\nTailwind CSS follows a mobile-first approach, meaning styles are applied to mobile devices by default, and larger screens are targeted using responsive prefixes.\n\n```html\n<!-- Base styles for mobile, md: for tablets, lg: for desktop -->\n<div class="text-sm md:text-base lg:text-lg">Responsive text size</div>\n```\n\n## Responsive Breakpoints\n\nTailwind provides five default breakpoints:\n\n- `sm`: 640px and up\n- `md`: 768px and up\n- `lg`: 1024px and up\n- `xl`: 1280px and up\n- `2xl`: 1536px and up\n\n## Common Responsive Patterns\n\n### 1. Grid Layouts\n\n```html\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\n  <!-- Grid items -->\n</div>\n```\n\n### 2. Flexible Navigation\n\n```html\n<nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">\n  <!-- Navigation items -->\n</nav>\n```\n\n### 3. Responsive Typography\n\n```html\n<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">Responsive Heading</h1>\n```\n\n## Tips for Better Responsive Design\n\n1. **Test on Real Devices** - Emulators are good, but real devices give you the true experience\n2. **Consider Touch Targets** - Make buttons and links large enough for fingers\n3. **Optimize Images** - Use responsive images and modern formats like WebP\n4. **Think Content-First** - Design your content hierarchy before adding visual elements\n\n## Conclusion\n\nTailwind CSS makes responsive design straightforward and maintainable. By following these patterns and best practices, you\'ll create websites that provide excellent user experiences across all devices.\n';
const gettingStartedNextjsMd = '---\ntitle: "Getting Started with Next.js 15: A Developer\'s Guide"\ndate: "2024-12-15"\nexcerpt: "Learn how to build modern web applications with Next.js 15, covering the latest features and best practices."\ntags: ["Next.js", "React", "Web Development"]\n---\n\n# Getting Started with Next.js 15: A Developer\'s Guide\n\nNext.js has become one of the most popular React frameworks for building modern web applications. With the release of Next.js 15, we\'ve got exciting new features that make development even more enjoyable.\n\n## What\'s New in Next.js 15\n\n### 1. Improved App Router\n\nThe App Router has been refined with better performance and developer experience. The new routing system makes it easier to create complex layouts and handle data fetching.\n\n### 2. Enhanced Server Components\n\nServer Components now have better streaming capabilities and improved hydration, making your apps faster and more responsive.\n\n### 3. Turbopack Improvements\n\nWhile still in beta, Turbopack continues to show impressive performance gains over Webpack, especially for larger applications.\n\n## Getting Started\n\nTo create a new Next.js 15 project:\n\n```bash\nnpx create-next-app@latest my-app\ncd my-app\nnpm run dev\n```\n\n## Best Practices\n\n1. **Use TypeScript** - It catches errors early and improves developer experience\n2. **Leverage Server Components** - They reduce client-side JavaScript and improve performance\n3. **Optimize Images** - Use the built-in Image component for automatic optimization\n4. **Implement Proper SEO** - Use metadata API for better search engine visibility\n\n## Conclusion\n\nNext.js 15 continues to push the boundaries of what\'s possible with React applications. Whether you\'re building a simple portfolio or a complex enterprise application, Next.js provides the tools you need to succeed.\n\nHappy coding!\n';
const promptEngineeringMd = '---\ntitle: "Intro to Prompt Engineering for Developers"\ndate: "2025-07-20"\nexcerpt: "Prompt engineering has evolved. Here\'s what it is, how it started, and what developers need to know to build smarter, more useful AI-powered apps."\ntags: ["AI", "Prompt Engineering", "LLMs", "DevTools"]\n---\n\n# Intro to Prompt Engineering for Developers\n\nPrompt engineering is the skill of shaping human intent into structured language that large language models (LLMs) can understand and respond to effectively. But it\'s not just about writing clever inputs — it\'s now part of building full-featured AI applications.\n\nWhether you\'re building a chatbot, a coding assistant, or an internal tool with LLM capabilities, prompt engineering is the entry point between user needs and machine reasoning.\n\n## How Prompt Engineering Started\n\nIn the early ChatGPT days (late 2022 to early 2023), prompting was seen as an art form. People experimented with:\n\n- Phrasing tricks like "Act as a…" or "Let\'s think step by step"\n- Prompt chaining, where outputs fed into new inputs\n- Jailbreaking to bypass content filters\n\nBack then, prompting was the entire interface. It felt magical — and anyone could do it.\n\nAt the time, a good prompt felt like a cheat code.\n\n## How It\'s Evolved\n\nToday in 2025, prompt engineering is still valuable — but the game has changed:\n\n| Then (2022–2023)        | Now (2024–2025)                        |\n| ----------------------- | -------------------------------------- |\n| Prompt = interface      | Prompt = one part of an LLM pipeline   |\n| Mostly manual tinkering | Structured prompts + tools + memory    |\n| Clever wording was key  | Systematic design is key               |\n| Anyone could do it      | Developers need engineering skills too |\n\nModern LLM apps combine:\n\n- Structured system and user prompts\n- Few-shot examples\n- Function calling and tool use\n- Embeddings and vector search\n- Memory/context management\n\nPrompting is no longer about "talking nicely to ChatGPT" — it\'s about designing systems that think and communicate well.\n\n## Core Prompting Techniques for Developers\n\nHere are four common and powerful prompting strategies used in actual development.\n\n### 1. Instructional Prompts\n\nTell the model directly what to do.\n\n```\nSummarize the following blog post into a 3-sentence executive summary.\n```\n\nUseful for: content generation, summarization, translation, analysis.\n\n### 2. Role-Based Prompts\n\nAssign a role or identity to the model.\n\n```\nYou are a senior software engineer. Explain the difference between REST and GraphQL to a junior developer.\n```\n\nUseful for: tutoring, simulation, support bots, onboarding tools.\n\n### 3. Few-Shot Prompts\n\nProvide input-output examples to guide structure or tone.\n\n```\nQ: What is a closure in JavaScript?\nA: A closure is a function that remembers the variables from its lexical scope even when it\'s run outside that scope.\n\nQ: What is a promise in JavaScript?\nA:\n```\n\nUseful for: Q&A, custom formatting, structured responses.\n\n### 4. Chain-of-Thought Prompts\n\nEncourage step-by-step reasoning before giving the answer.\n\n```\nLet\'s think step by step:\nA farmer has 15 apples. He gives 3 to each of his 4 children. How many apples does he have left?\n```\n\nUseful for: planning, math, logic, decision-making tasks.\n\n## Real-World Use Cases\n\nPrompt engineering is now embedded into production systems. Some examples:\n\n### Code Review Assistant\n\n```\nYou are a code reviewer. Analyze the following code for logic bugs, readability issues, and suggest improvements. Output in markdown.\n\nCode:\n${userCode}\n```\n\n### AI Function Routing\n\nUsed in OpenAI\'s function calling or custom GPTs.\n\n```\nYou are an assistant that helps plan events. When the user mentions a date or location, use the create_event() function.\n```\n\n### Custom System Personas\n\nUsed in assistant-like tools, da\'wah apps, or productivity bots.\n\n```\nYou are a calm, helpful Islamic teacher. Speak to beginners, avoid complex terms, and offer references when possible.\n```\n\n## Tips to Prompt Like a Developer\n\n1. Treat prompts like code: test, modularize, version-control them\n2. Be specific: models don\'t read minds — state what you want clearly\n3. Control formatting: ask for markdown, bullet lists, or JSON\n4. Don\'t rely on memory: repeat relevant info if needed\n5. Think contextually: combine prompt design with tool logic and memory\n\n## Common Mistakes to Avoid\n\n- Vague prompts like "help me with this" — help how, and with what?\n- Assuming the model understands your app state or logic — it doesn\'t\n- Expecting perfect repeatability — LLMs are probabilistic by design\n- Writing prompts like prose instead of clear instructions\n\n## The Role of Prompting in 2025\n\nPrompt engineering isn\'t dead — it\'s just no longer the whole picture. It\'s now one layer of the LLM application stack.\n\nTo stay ahead, developers need to combine:\n\n- Clear, effective prompting\n- Smart system design\n- APIs, tools, and context management\n- Testing and iteration\n\nIf you can do that, you\'re not just a prompt engineer — you\'re building the future of human-computer interaction.\n\n## Coming Next\n\nIn the next post, we\'ll walk through building an actual LLM-powered web app using Vite, React, and the OpenAI API — with real prompt logic and live testing.\n\nStay tuned.\n';
const blogPostsContent = {
  "building-responsive-websites": buildingResponsiveWebsitesMd,
  "getting-started-with-nextjs": gettingStartedNextjsMd,
  "intro-to-prompt-engineering-for-developers": promptEngineeringMd
};
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
    if (!aboutMd || typeof aboutMd !== "string") ;
    const { content } = matter(aboutMd);
    const processedContent = await remark().use(html).process(content);
    return processedContent.toString();
  } catch (error) {
    console.error("Error processing about content:", error);
    try {
      const processedContent = await remark().use(html).process(aboutMd || "# About\n\nContent unavailable.");
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
      const { data, content } = matter(fileContent);
      const processedContent = await remark().use(html).process(content);
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
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
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
