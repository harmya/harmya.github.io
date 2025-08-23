<script lang="ts">
  import { fade } from 'svelte/transition';
  import ParticleCanvas from '$lib/ParticleCanvas.svelte';
  
  // Sample blog posts data
  const posts = [
    {
      id: 1,
      title: "Building GPU Programming Platforms",
      subtitle: "Lessons learned from creating Tensara and working with distributed systems",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Machine Learning in Healthcare",
      subtitle: "Training NER models and LLM agents for medical document processing",
      date: "2023-12-08"
    },
    {
      id: 3,
      title: "Teaching Algorithms at Scale",
      subtitle: "Reflections from being Head TA for CS381 at Purdue University",
      date: "2023-11-22"
    },
    {
      id: 4,
      title: "XAI for Injury Classification",
      subtitle: "Research on explainable AI models for medical injury prediction",
      date: "2023-10-10"
    },
    {
      id: 5,
      title: "Human-Computer Interaction",
      subtitle: "Designing better recommender systems through user research",
      date: "2023-09-15"
    }
  ];
</script>

<svelte:head>
  <title>Blog - Harmya Bhatt</title>
  <meta name="description" content="Blog posts by Harmya Bhatt" />
</svelte:head>

<div class="container" in:fade={{ duration: 100 }}>
  <ParticleCanvas />
  
  <main>
    <div class="content" transition:fade={{ duration: 200 }}>
      <h1>Blog</h1>
      
      <div class="posts">
        {#each posts as post}
          <article class="post" transition:fade={{ duration: 200, delay: 100 }}>
            <h2 class="post-title">{post.title}</h2>
            <p class="post-subtitle">{post.subtitle}</p>
            <time class="post-date">{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
          </article>
        {/each}
      </div>
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
    max-width: 800px;
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
    text-align: left;
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

  @media (max-width: 600px) {
    .post-title {
      font-size: 1.25rem;
    }
    
    .post-subtitle {
      font-size: 0.9rem;
    }
  }
</style>