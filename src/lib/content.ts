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

// Simple frontmatter parser for edge compatibility
function parseFrontmatter(content: string): { data: any; content: string } {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!frontmatterMatch) {
    return { data: {}, content };
  }
  
  const [, frontmatterStr, bodyContent] = frontmatterMatch;
  const data: any = {};
  
  // Parse YAML-like frontmatter
  const lines = frontmatterStr.split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value: any = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays (simple format like ["tag1", "tag2", "tag3"])
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value);
        } catch {
          // If JSON parsing fails, treat as string
        }
      }
      
      data[key] = value;
    }
  }
  
  return { data, content: bodyContent };
}

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
    
    const { content } = parseFrontmatter(aboutMd);
    const processedContent = await remark().use(html).process(content);
    return processedContent.toString();
  } catch (error) {
    console.error('Error processing about content:', error);
    try {
      // Fallback: extract content after frontmatter manually
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
      const { data, content } = parseFrontmatter(fileContent);
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

  const { data, content } = parseFrontmatter(fileContent);
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
