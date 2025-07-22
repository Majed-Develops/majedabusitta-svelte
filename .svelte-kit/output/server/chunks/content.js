import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { readFileSync } from "fs";
import { join } from "path";
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
function readMarkdownFile(relativePath) {
  try {
    const fullPath = join(process.cwd(), "content", relativePath);
    return readFileSync(fullPath, "utf-8");
  } catch (error) {
    console.error(`Error reading markdown file: ${relativePath}`, error);
    return "";
  }
}
const blogPostsMap = {
  "building-responsive-websites": "posts/building-responsive-websites.md",
  "getting-started-with-nextjs": "posts/getting-started-with-nextjs.md",
  "intro-to-prompt-engineering-for-developers": "posts/intro-to-prompt-engineering-for-developers.md"
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
  const aboutMd = readMarkdownFile("about.md");
  const { content } = matter(aboutMd);
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}
async function getBlogPosts() {
  const posts = await Promise.all(
    Object.entries(blogPostsMap).map(async ([slug, filePath]) => {
      const fileContent = readMarkdownFile(filePath);
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
  const filePath = blogPostsMap[slug];
  if (!filePath) {
    return null;
  }
  const fileContent = readMarkdownFile(filePath);
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
