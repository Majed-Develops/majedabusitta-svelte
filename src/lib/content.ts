// @ts-ignore - gray-matter ESM compatibility
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Project, BlogPost, ContactInfo, ResumeData } from "./types.js";

// Import JSON files directly
import projectsData from "../../content/projects.json";
import contactData from "../../content/contact.json";
import resumeData from "../../content/resume.json";

// Use import.meta.glob to import markdown files - compatible with Cloudflare Pages
const blogPostModules = import.meta.glob('../../content/posts/*.md', { query: '?raw', import: 'default', eager: true });
const aboutModule = import.meta.glob('../../content/about.md', { query: '?raw', import: 'default', eager: true });

// Extract blog posts content from the glob import
const blogPostsContent: Record<string, string> = {};
for (const [path, content] of Object.entries(blogPostModules)) {
  const filename = path.split('/').pop()?.replace('.md', '') || '';
  blogPostsContent[filename] = content as string;
}

// Extract about content
const aboutMd = Object.values(aboutModule)[0] as string || '';

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
  try {
    // Ensure aboutMd is defined and not empty
    if (!aboutMd || typeof aboutMd !== 'string') {
      throw new Error('About markdown content is not available');
    }
    
    const { content } = matter(aboutMd);
    const processedContent = await remark().use(html).process(content);
    return processedContent.toString();
  } catch (error) {
    console.error('Error processing about content:', error);
    try {
      // Fallback: extract content after frontmatter manually if gray-matter fails
      const contentAfterFrontmatter = aboutMd.replace(/^---[\s\S]*?---\n?/, '');
      const processedContent = await remark().use(html).process(contentAfterFrontmatter || '# About\n\nContent unavailable.');
      return processedContent.toString();
    } catch (fallbackError) {
      console.error('Fallback processing failed:', fallbackError);
      // Final fallback: return a simple HTML string
      return '<h1>About</h1><p>Content unavailable at the moment.</p>';
    }
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
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
        content: processedContent.toString(),
      };
    }),
  );

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
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
    content: processedContent.toString(),
  };
}
