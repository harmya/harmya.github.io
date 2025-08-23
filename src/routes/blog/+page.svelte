<script lang="ts">
  import { fade } from "svelte/transition";
  import ParticleCanvas from "$lib/ParticleCanvas.svelte";
  import { getBlogPosts, type BlogPost } from "$lib/blog.js";
  import { onMount } from "svelte";

  let posts: BlogPost[] = [];
  let loading = true;

  onMount(async () => {
    try {
      posts = await getBlogPosts();
    } catch (error) {
      console.error("Failed to load blog posts:", error);
    } finally {
      loading = false;
    }
  });
</script>

<svelte:head>
  <title>Blog - Harmya Bhatt</title>
  <meta name="description" content="Blog posts by Harmya Bhatt" />
</svelte:head>

<div class="container" in:fade={{ duration: 100 }}>
  <main>
    <div class="content" transition:fade={{ duration: 200 }}>
      <h1>Blog</h1>

      {#if loading}
        <div class="loading">Loading posts...</div>
      {:else}
        <div class="posts">
          {#each posts as post}
            <article
              class="post"
              transition:fade={{ duration: 200, delay: 100 }}
            >
              <a href="/blog/{post.slug}" class="post-link">
                <h2 class="post-title">{post.title}</h2>
                <p class="post-subtitle">{post.subtitle}</p>
                <time class="post-date"
                  >{new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</time
                >
              </a>
            </article>
          {/each}
        </div>
      {/if}
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
    min-height: 75vh;
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

  /* Typography */
  h1 {
    font-family: var(--font-family-serif);
    color: #669869;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 800;
  }

  .posts {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .post {
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(102, 152, 105, 0.2);
    transition: all 0.2s ease;
  }

  .post:last-child {
    border-bottom: none;
  }

  .post:hover {
    transform: translateY(-2px);
  }

  .post-title {
    font-family: var(--font-family-serif);
    color: #417645;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .post-subtitle {
    color: var(--text-color);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0.75rem;
    opacity: 0.8;
  }

  .post-date {
    color: #669869;
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0.7;
  }

  .loading {
    color: var(--text-color);
    font-size: 1.1rem;
    text-align: center;
    padding: 2rem;
    opacity: 0.7;
  }

  .post-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .post-link:hover .post-title {
    color: #2c4f2e;
  }

  @media (max-width: 600px) {
    .post-title {
      font-size: 1.25rem;
    }

    .post-subtitle {
      font-size: 0.9rem;
    }
  }
</style>
