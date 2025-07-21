import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Project, BlogPost, ContactInfo, ResumeData } from "./types.js";

const contentDirectory = path.join(process.cwd(), "content");

export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(contentDirectory, "projects.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export async function getContactInfo(): Promise<ContactInfo> {
  const filePath = path.join(contentDirectory, "contact.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export async function getResumeData(): Promise<ResumeData> {
  const filePath = path.join(contentDirectory, "resume.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export async function getAboutContent(): Promise<string> {
  const filePath = path.join(contentDirectory, "about.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);

  return processedContent.toString();
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(contentDirectory, "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames
      .filter((name) => name.endsWith(".md"))
      .map(async (filename) => {
        const slug = filename.replace(/\.md$/, "");
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf8");
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
  try {
    const filePath = path.join(contentDirectory, "posts", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
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
  } catch {
    return null;
  }
}
