import { getBlogPost, getBlogPosts } from '$lib/blog.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    throw error(404, 'Post not found');
  }
  
  return {
    post
  };
}

export async function entries() {
  const posts = await getBlogPosts();
  return posts.map(post => ({
    slug: post.slug
  }));
} 