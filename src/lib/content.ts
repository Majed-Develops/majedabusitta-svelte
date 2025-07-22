// @ts-ignore - gray-matter ESM compatibility
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Project, BlogPost, ContactInfo, ResumeData } from "./types.js";

// Import JSON files directly
import projectsData from "../../content/projects.json";
import contactData from "../../content/contact.json";
import resumeData from "../../content/resume.json";

// Import markdown files as strings
import aboutMd from "../../content/about.md?raw";
import buildingResponsiveWebsitesMd from "../../content/posts/building-responsive-websites.md?raw";
import gettingStartedWithNextjsMd from "../../content/posts/getting-started-with-nextjs.md?raw";
import introToPromptEngineeringMd from "../../content/posts/intro-to-prompt-engineering-for-developers.md?raw";

// Blog posts mapping
const blogPostsMap: Record<string, string> = {
  "building-responsive-websites": buildingResponsiveWebsitesMd,
  "getting-started-with-nextjs": gettingStartedWithNextjsMd,
  "intro-to-prompt-engineering-for-developers": introToPromptEngineeringMd,
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
  const { content } = matter(aboutMd);
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await Promise.all(
    Object.entries(blogPostsMap).map(async ([slug, fileContent]) => {
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
  const fileContent = blogPostsMap[slug];
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
    content: processedContent.toString(),
  };
}
