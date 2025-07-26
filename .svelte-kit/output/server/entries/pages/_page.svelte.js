import { F as ensure_array_like, O as head, G as attr, I as escape_html, R as attr_style, K as stringify, B as pop, z as push } from "../../chunks/index.js";
import { I as Icons } from "../../chunks/Icons.js";
import { T as ThemeToggle } from "../../chunks/ThemeToggle.js";
function _page($$payload, $$props) {
  push();
  const featuredProjects = [
    {
      title: "Score Buddies",
      description: "Full-stack task management with real-time collaboration, authentication, and beautiful UI.",
      techStack: [
        "SvelteKit",
        "TypeScript",
        "SQLite",
        "Drizzle ORM",
        "Lucia Auth"
      ],
      liveUrl: "https://score-buddies.pages.dev/",
      githubUrl: "https://github.com/Majed-Develops/Score-Buddies",
      image: "/images/Score_buddies.png"
    },
    {
      title: "Balagh",
      description: "Modern React application helping Muslims share their faith with beautiful resources and tools.",
      techStack: ["React 19", "Vite", "Tailwind CSS", "Radix UI"],
      liveUrl: "https://balagh.pages.dev/",
      githubUrl: "https://github.com/Majed-Develops/balagh",
      image: "/images/balagh.png"
    },
    {
      title: "Study Buddy",
      description: "Responsive React app combining Pomodoro timer and exam system using modern JS and Web Audio API.",
      techStack: ["React 19", "Vite", "JavaScript ES6+", "CSS"],
      liveUrl: "https://study-buddy-aln.pages.dev/",
      githubUrl: "https://github.com/Majed-Develops/study-buddy",
      image: "/images/study-buddy.png"
    }
  ];
  const each_array = ensure_array_like(featuredProjects);
  const each_array_2 = ensure_array_like([
    { name: "Prompt Engineering", level: 95 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "React & Svelte", level: 80 },
    { name: "Node.js & APIs", level: 75 },
    { name: "Cybersecurity", level: 70 }
  ]);
  const each_array_3 = ensure_array_like([
    "Problem Solving",
    "Self-Learning",
    "Clear Communication",
    "Creative Thinking",
    "VS Code",
    "GitHub",
    "Cloudflare Pages",
    "Terminal/CLI"
  ]);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Majed Abu Sitta - Full Stack Developer &amp; Cybersecurity Student</title>`;
    $$payload2.out.push(`<meta name="description" content="Prompt engineer and future full-stack developer specializing in modern web development, AI, and cybersecurity. Building meaningful solutions with React, Svelte, and Node.js."/>`);
  });
  $$payload.out.push(`<div class="fixed top-6 right-6 z-50">`);
  ThemeToggle($$payload);
  $$payload.out.push(`<!----></div> <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden"><div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">`);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"><button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" aria-label="Scroll to About section"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></button></div></section> <section id="about" class="py-24 bg-gray-50 dark:bg-gray-800 slate:bg-slate-800"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="lg:text-center"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white slate:text-white sm:text-4xl">About Me</h2> <p class="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 slate:text-slate-300 lg:mx-auto">I'm a prompt engineer and future full-stack developer who thrives on building meaningful, real-world solutions with modern web tools.</p></div> <div class="mt-16"><div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"><div class="relative group"><div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div> <div class="relative px-6 py-8 bg-white dark:bg-gray-900 slate:bg-slate-900 rounded-lg leading-none"><div class="text-blue-600 mb-4"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white slate:text-white">Education</h3> <p class="mt-2 text-gray-600 dark:text-gray-300 slate:text-slate-300">Bachelor's in Cybersecurity (July 2025) - Blending security awareness with development finesse.</p></div></div> <div class="relative group"><div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div> <div class="relative px-6 py-8 bg-white dark:bg-gray-900 slate:bg-slate-900 rounded-lg leading-none"><div class="text-blue-600 mb-4"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white slate:text-white">Expertise</h3> <p class="mt-2 text-gray-600 dark:text-gray-300 slate:text-slate-300">Prompt Engineering, Full-Stack Development, and creating AI-enhanced solutions for real-world problems.</p></div></div> <div class="relative group"><div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div> <div class="relative px-6 py-8 bg-white dark:bg-gray-900 slate:bg-slate-900 rounded-lg leading-none"><div class="text-blue-600 mb-4"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white slate:text-white">Focus</h3> <p class="mt-2 text-gray-600 dark:text-gray-300 slate:text-slate-300">Building elegant UIs, powerful backends, and optimized solutions for speed and accessibility.</p></div></div></div></div></div></section> <section id="projects" class="py-24"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="lg:text-center"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white slate:text-white sm:text-4xl">Featured Projects</h2> <p class="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 slate:text-slate-300 lg:mx-auto">A selection of my recent work showcasing modern web development and problem-solving skills.</p></div> <div class="mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array[$$index_1];
    const each_array_1 = ensure_array_like(project.techStack);
    $$payload.out.push(`<div class="group relative bg-white dark:bg-gray-900 slate:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 slate:border-slate-700"><div class="aspect-video overflow-hidden"><img${attr("src", project.image)}${attr("alt", project.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"/></div> <div class="p-6"><h3 class="text-xl font-semibold text-gray-900 dark:text-white slate:text-white mb-2">${escape_html(project.title)}</h3> <p class="text-gray-600 dark:text-gray-300 slate:text-slate-300 mb-4 text-sm leading-relaxed">${escape_html(project.description)}</p> <div class="flex flex-wrap gap-2 mb-4"><!--[-->`);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tech = each_array_1[$$index];
      $$payload.out.push(`<span class="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 slate:bg-slate-700 text-blue-800 dark:text-blue-200 slate:text-slate-200 rounded-md">${escape_html(tech)}</span>`);
    }
    $$payload.out.push(`<!--]--></div> <div class="flex gap-3"><a${attr("href", project.liveUrl)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">`);
    Icons($$payload, { name: "external", size: 14 });
    $$payload.out.push(`<!----> Live Demo</a> <a${attr("href", project.githubUrl)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">`);
    Icons($$payload, { name: "github", size: 14 });
    $$payload.out.push(`<!----> Code</a></div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></section> <section id="skills" class="py-24 bg-gray-50 dark:bg-gray-800 slate:bg-slate-800"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="lg:text-center"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white slate:text-white sm:text-4xl">Skills &amp; Experience</h2></div> <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2"><div><h3 class="text-lg font-semibold text-gray-900 dark:text-white slate:text-white mb-6">Technical Skills</h3> <div class="space-y-4"><!--[-->`);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let skill = each_array_2[$$index_2];
    $$payload.out.push(`<div><div class="flex justify-between mb-1"><span class="text-sm font-medium text-gray-700 dark:text-gray-300 slate:text-slate-300">${escape_html(skill.name)}</span> <span class="text-sm text-gray-500 dark:text-gray-400 slate:text-slate-400">${escape_html(skill.level)}%</span></div> <div class="w-full bg-gray-200 dark:bg-gray-700 slate:bg-slate-700 rounded-full h-2"><div class="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"${attr_style(`width: ${stringify(skill.level)}%`)}></div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div> <div><h3 class="text-lg font-semibold text-gray-900 dark:text-white slate:text-white mb-6">Tools &amp; Soft Skills</h3> <div class="grid grid-cols-2 gap-4"><!--[-->`);
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let item = each_array_3[$$index_3];
    $$payload.out.push(`<div class="flex items-center space-x-2"><svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span class="text-sm text-gray-700 dark:text-gray-300 slate:text-slate-300">${escape_html(item)}</span></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></div></div></section> <section id="contact" class="py-24"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="lg:text-center"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white slate:text-white sm:text-4xl">Let's Work Together</h2> <p class="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 slate:text-slate-300 lg:mx-auto">Ready to bring your ideas to life? I'm always interested in discussing new opportunities and projects.</p></div> <div class="mt-16 max-w-lg mx-auto"><div class="bg-white dark:bg-gray-900 slate:bg-slate-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700 slate:border-slate-700"><form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 slate:text-slate-300">Name</label> <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 slate:border-slate-600 bg-white dark:bg-gray-800 slate:bg-slate-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white slate:text-white" required/></div> <div><label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 slate:text-slate-300">Email</label> <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 slate:border-slate-600 bg-white dark:bg-gray-800 slate:bg-slate-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white slate:text-white" required/></div> <div><label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 slate:text-slate-300">Message</label> <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 slate:border-slate-600 bg-white dark:bg-gray-800 slate:bg-slate-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white slate:text-white" required></textarea></div> <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">Send Message</button></form> <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 slate:border-slate-700"><p class="text-sm text-gray-600 dark:text-gray-400 slate:text-slate-400 text-center mb-4">Or reach out directly:</p> <div class="flex justify-center space-x-6"><a href="mailto:majed@example.com" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">Email</a> <a href="https://www.linkedin.com/in/majed-bashir" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">LinkedIn</a> <a href="https://github.com/majed-develops" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">GitHub</a></div></div></div></div></div></section> <footer class="bg-gray-50 dark:bg-gray-900 slate:bg-slate-900 border-t border-gray-200 dark:border-gray-700 slate:border-slate-700"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="text-center"><p class="text-gray-600 dark:text-gray-400 slate:text-slate-400">© 2025 Majed Abu Sitta. Built with SvelteKit and Tailwind CSS.</p></div></div></footer>`);
  pop();
}
export {
  _page as default
};
