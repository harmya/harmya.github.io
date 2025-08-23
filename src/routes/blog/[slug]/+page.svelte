<script lang="ts">
  import { fade } from "svelte/transition";
  import type { BlogPost } from "$lib/blog.js";

  export let data: { post: BlogPost };

  $: post = data.post;
</script>

<svelte:head>
  <title
    >{post ? `${post.title} - Harmya Bhatt` : "Blog Post - Harmya Bhatt"}</title
  >
  <meta
    name="description"
    content={post?.subtitle || "Blog post by Harmya Bhatt"}
  />
</svelte:head>

<div class="container" in:fade={{ duration: 100 }}>
  <main>
    <div class="content" transition:fade={{ duration: 200 }}>
      <article class="post">
        <header class="post-header">
          <h1 class="post-title">{post.title}</h1>
          <p class="post-subtitle">{post.subtitle}</p>
          <time class="post-date">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <a href="/blog" class="back-link">← Back to Blog</a>
        </header>

        <div class="post-content">
          {@html post.html}
        </div>
      </article>
    </div>
  </main>
</div>

<style>
  .container {
    position: relative;
    min-height: 100vh;
    width: 100vw;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-color);
  }

  main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    width: 100%;
  }

  .content {
    max-width: 75vw;
    text-align: center;
    backdrop-filter: blur(5px);
    background: #fbf3ee;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 2.5rem;
    padding-bottom: 3rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    width: 100%;
  }

  @media (max-width: 600px) {
    .content {
      max-width: 108vw;
      min-width: 0;
      padding: 1.2rem 0.5rem 2rem 0.5rem;
    }
    main {
      padding: 0.5rem;
    }
  }

  .loading,
  .not-found {
    color: var(--text-color);
    font-size: 1.1rem;
    text-align: center;
    padding: 2rem;
    opacity: 0.7;
  }

  .post {
    width: 100%;
    max-width: 800px;
  }

  .post-header {
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(102, 152, 105, 0.2);
  }

  .post-title {
    font-family: var(--font-family-serif);
    color: #669869;
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .post-subtitle {
    color: var(--text-color);
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  .post-date {
    color: #669869;
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.7;
    display: block;
    margin-bottom: 1.5rem;
  }

  .back-link {
    color: #417645;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease;
  }

  .back-link:hover {
    color: #2c4f2e;
  }

  .post-content {
    text-align: left;
    line-height: 1.8;
    color: var(--text-color);
  }

  .post-content :global(h1) {
    font-family: var(--font-family-serif);
    color: #417645;
    font-size: 2rem;
    margin: 2rem 0 1rem 0;
    line-height: 1.3;
  }

  .post-content :global(h2) {
    font-family: var(--font-family-serif);
    color: #417645;
    font-size: 1.5rem;
    margin: 1.5rem 0 0.75rem 0;
    line-height: 1.3;
  }

  .post-content :global(h3) {
    font-family: var(--font-family-serif);
    color: #417645;
    font-size: 1.25rem;
    margin: 1.25rem 0 0.5rem 0;
    line-height: 1.3;
  }

  .post-content :global(p) {
    margin-bottom: 1.5rem;
  }

  .post-content :global(ul),
  .post-content :global(ol) {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  .post-content :global(li) {
    margin-bottom: 0.5rem;
  }

  .post-content :global(strong) {
    font-weight: 700;
    color: #417645;
  }

  .post-content :global(code) {
    background: rgba(102, 152, 105, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: "Courier New", monospace;
    font-size: 0.9em;
  }

  .post-content :global(pre) {
    background: rgba(102, 152, 105, 0.1);
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  .post-content :global(blockquote) {
    border-left: 3px solid #669869;
    padding-left: 1.5rem;
    margin: 1.5rem 0;
    font-style: italic;
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    .post-title {
      font-size: 2rem;
    }

    .post-subtitle {
      font-size: 1rem;
    }

    .post-content :global(h1) {
      font-size: 1.5rem;
    }

    .post-content :global(h2) {
      font-size: 1.25rem;
    }
  }
</style>
