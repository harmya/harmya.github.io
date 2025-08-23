import { marked } from 'marked';

export interface BlogPost {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
  content: string;
  html: string;
}

// Parse frontmatter from markdown content
function parseFrontmatter(content: string): { frontmatter: any; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }
  
  const frontmatterText = match[1];
  const markdownContent = match[2];
  
  // Simple YAML-like parser for frontmatter
  const frontmatter: any = {};
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, content: markdownContent };
}


export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  // Import all markdown files from the posts directory
  const postModules = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default' });
  
  for (const [path, loader] of Object.entries(postModules)) {
    const content = await loader() as string;
    const { frontmatter, content: markdownContent } = parseFrontmatter(content);
    
    const post: BlogPost = {
      title: frontmatter.title || 'Untitled',
      subtitle: frontmatter.subtitle || '',
      date: frontmatter.date || '',
      slug: frontmatter.slug || path.split('/').pop()?.replace('.md', '') || '',
      content: markdownContent,
      html: await marked(markdownContent)
    };
    
    posts.push(post);
  }
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
} 