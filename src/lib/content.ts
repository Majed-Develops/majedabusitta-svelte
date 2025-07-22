// @ts-ignore - gray-matter ESM compatibility
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { readFileSync } from "fs";
import { join } from "path";
import type { Project, BlogPost, ContactInfo, ResumeData } from "./types.js";

// Import JSON files directly
import projectsData from "../../content/projects.json";
import contactData from "../../content/contact.json";
import resumeData from "../../content/resume.json";

// Helper function to read markdown files
function readMarkdownFile(relativePath: string): string {
  try {
    const fullPath = join(process.cwd(), 'content', relativePath);
    return readFileSync(fullPath, 'utf-8');
  } catch (error) {
    console.error(`Error reading markdown file: ${relativePath}`, error);
    return '';
  }
}

// Blog posts mapping
const blogPostsMap: Record<string, string> = {
  "building-responsive-websites": "posts/building-responsive-websites.md",
  "getting-started-with-nextjs": "posts/getting-started-with-nextjs.md", 
  "intro-to-prompt-engineering-for-developers": "posts/intro-to-prompt-engineering-for-developers.md",
};

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}

export async function getContactInfo(): Promise<ContactInfo> {
  return contactData;
}

export async function getResumeData(): Promise<ResumeData> {
  return resumeData;
}

export async function getAboutContent(): Promise<string> {
  const aboutMd = readMarkdownFile('about.md');
  const { content } = matter(aboutMd);
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}

export async function getBlogPosts(): Promise<BlogPost[]> {
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
        content: processedContent.toString(),
      };
    }),
  );

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
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
    content: processedContent.toString(),
  };
}
