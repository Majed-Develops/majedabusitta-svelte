export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export interface ContactInfo {
  email: string;
  formspreeEndpoint: string;
  socialLinks: {
    github: string;
    linkedin: string;
    hackerone: string;
  };
  availability: string;
}

export interface ResumeData {
  pdfUrl: string;
  lastUpdated: string;
  sections: {
    summary: string;
    experience: Array<{
      company: string;
      position: string;
      duration: string;
      description: string[];
    }>;
    skills: string[];
    education: Array<{
      institution: string;
      degree: string;
      year: string;
    }>;
  };
}
