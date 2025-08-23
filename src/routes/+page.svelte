<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import ParticleCanvas from '$lib/ParticleCanvas.svelte';

  let visible = false;

  onMount(() => {
    let fadeInterval = setInterval(() => {
        visible = true;
    }, 30);
    
    return () => {
      clearInterval(fadeInterval);
    };
  });
</script>

<svelte:head>
  <title>Harmya Bhatt</title>
  <meta name="description" content="Hello, I'm Harmya Bhatt" />
</svelte:head>

<div class="container" in:fade={{ duration: 100 }}>
  <ParticleCanvas />

  <main>
    {#if visible}
      <div class="content" transition:fade={{ duration: 200 }}>
        <h1>Harmya Bhatt</h1>

        <div class="about">
          <p>
            I like ML, Math and Systems. I currently work at 
            <a href="https://www.modal.com/" target="_blank" rel="noopener noreferrer">Modal</a>, a platform for AI and data teams. I studied Computer Science at 
            <a href="https://www.cs.purdue.edu/" target="_blank" rel="noopener noreferrer">Purdue</a> 
            with some Math and Philosophy. 
          </p>
          <br>

          <p>
              I have worked at
              <a href="https://coherehealth.com/tech-blog/enhancing-machine-learning-infrastructure/" target="_blank" rel="noopener noreferrer">Cohere Health</a> 
              building workflows for fax intake on the software team. I trained NER Models and LLM agents on the ML team. 
              Lately, I have been building <a href="https://tensara.org" target="_blank" rel="noopener noreferrer">Tensara</a>, 
              a GPU programming platform. Get in touch if you have feedback!
          </p>
          <br>

          <p>
            At university, I was also involved in research with 
            <a href="https://web.ics.purdue.edu/~gnanda/RGroup.html" target="_blank" rel="noopener noreferrer">Dr Gaurav Nanda</a> 
            working on ML Models (and some XAI) for injury classification and 
            <a href="https://tl-tianyi-li.github.io/" target="_blank" rel="noopener noreferrer   ">Dr Tianyi Li</a> 
            working on Human-Computer Interaction for recommender systems. 
            Also, I had a lot of fun being the Head TA for the Algorithms course for a year.
          </p>
          <br>

          <p>
              I love tinkering and building projects, like: 
              <a href="https://github.com/tensara/tensara-cli" target="_blank" rel="noopener noreferrer">CLI for Tensara</a>, 
              <a href="https://github.com/harmya/elden" target="_blank" rel="noopener noreferrer"> Compiler </a>, 
              <a href="https://github.com/harmya/tomography" target="_blank" rel="noopener noreferrer"> Computed Tomography </a>,
               <a href="https://github.com/harmya/particle-life" target="_blank" rel="noopener noreferrer"> Particle Life </a> and more.
          </p>
                  
          <br>

          <p>
              Apart from all this, I try to play the <a href="https://www.youtube.com/@harmyab" target="_blank" rel="noopener noreferrer">guitar</a>, 
              I love playing soccer, and reading random wikipedia articles.
              
          </p>
          <br>

          <p>
              Some amazing people I know: <br>
              <a class="link" href="https://abuynits.github.io/" target="_blank" rel="noopener noreferrer">Alexiy Buynitsky</a>, 
              <a class="link" href="https://arefmalek.com/" target="_blank" rel="noopener noreferrer">Aref Malek</a>, 
              <a class="link" href="https://bhavesh.dev/" target="_blank" rel="noopener noreferrer">Bhavesh Pareek</a>, 
              <a class="link" href="https://coleroberts.dev/index" target="_blank" rel="noopener noreferrer">Cole Roberts</a>, 
              <a class="link" href="https://zietek.dev/" target="_blank" rel="noopener noreferrer">Jacob Zietek</a>, 
              <a class="link" href="https://jinen.setpal.net/" target="_blank" rel="noopener noreferrer">Jinen Setpal</a>, 
              <a class="link" href="https://wade.dev/" target="_blank" rel="noopener noreferrer">Nicholas Wade</a>, 
              <a class="link" href="https://mikail-khan.com/" target="_blank" rel="noopener noreferrer">Mikail Khan</a>,
              <a class="link" href="https://sagarpatil.me/" target="_blank" rel="noopener noreferrer">Sagar Patil</a>,  <br>
              <a class="link" href="https://sohamjog.com/" target="_blank" rel="noopener noreferrer">Soham Jog</a>, and
              <a class="link" href="https://sarthakmangla.com/" target="_blank" rel="noopener noreferrer">Sarthak Mangla</a>. 
          </p>
        </div>

        <div class="social">
          <a href="/blog">
            <span class="icon">Blog</span>
          </a>
          <a href="https://github.com/harmya" target="_blank" rel="noopener noreferrer">
            <span class="icon">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/harmyacs" target="_blank" rel="noopener noreferrer">
            <span class="icon">LinkedIn</span>
          </a>
          <a href="https://twitter.com/racerfunction" target="_blank" rel="noopener noreferrer">
            <span class="icon">Twitter</span>
          </a>
        </div>
      </div>
    {/if}
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
    max-width: 1100px;
    min-height: 500px;
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
    margin-bottom: 1.5rem;
    font-weight: 800;
    padding-bottom: 2rem;
  }

  .about {
    margin-bottom: 2rem;
    line-height: 1.6;
    text-align: left;
    color: var(--text-color);
  }

  .social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  .social a {
    margin-top: 1rem;
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .social a:hover {
    color: var(--text-color);
  }

a {
  color: #417645;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -2px;
  left: 0;
  background: repeating-linear-gradient(to right, currentColor, currentColor 2px, transparent 2px, transparent 6px);
  opacity: 0.5;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

a:hover {
  color: #2c4f2e;
}

a:hover::after {
  opacity: 1;
  transform: scaleY(1.5);
}

a:focus {
  outline: none;
}

a:focus-visible {
  outline: 2px solid #2c4f2e;
  outline-offset: 2px;
  border-radius: 2px;
}

.link {
  color: #111111;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}
</style>
