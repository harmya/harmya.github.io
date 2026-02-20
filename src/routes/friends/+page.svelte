<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Friends - Harmya Bhatt</title>
  <meta name="description" content="Cool people I know" />
</svelte:head>

<div class="container" in:fade={{ duration: 100 }}>
  <main>
    <div class="content" transition:fade={{ duration: 200 }}>
      <a href="/" class="back-link">← Back</a>
      <h1>Cool People</h1>
      <p class="subtitle">Here are some of my very close friends who are really good at what they do:</p>

      <div class="friends">
        <p>
          <a href="https://abuynits.github.io/" target="_blank" rel="noopener noreferrer">Alexiy Buynitsky</a> — MS at UCSD, Robotics<br>
          <a href="https://arefmalek.com/" target="_blank" rel="noopener noreferrer">Aref Malek</a> — SWE at Coinbase<br>
          <a href="https://bhavesh.dev/" target="_blank" rel="noopener noreferrer">Bhavesh Pareek</a> — SWE at Klaviyo, hetzner's no.1 customer<br>
          <a href="https://coleroberts.dev/index" target="_blank" rel="noopener noreferrer">Cole Roberts</a> — Incoming at Garmin, very cool website<br>
          <a href="https://zietek.dev/" target="_blank" rel="noopener noreferrer">Jacob Zietek</a> — Fellow at a16z, chiller<br>
          <a href="https://jinen.setpal.net/" target="_blank" rel="noopener noreferrer">Jinen Setpal</a> — ML PHD student at Purdue<br>
          <a href="https://wade.dev/" target="_blank" rel="noopener noreferrer">Nicholas Wade</a> — Robotics at Persona, houston enjoyer<br>
          <a href="https://mikail-khan.com/" target="_blank" rel="noopener noreferrer">Mikail Khan</a> — PL PHD student at CMU, hasn't written a normal programming language in years<br>
          <a href="https://sagarpatil.me/" target="_blank" rel="noopener noreferrer">Sagar Patil</a> — SWE at SpaceX, ask him about his C++ build system<br>
          <a href="https://sohamjog.com/" target="_blank" rel="noopener noreferrer">Soham Jog</a> — Incoming at Graphite (Cursor), guitarist<br>
          <a href="https://sarthakmangla.com/" target="_blank" rel="noopener noreferrer">Sarthak Mangla</a> — Incoming at Cartesia, ML yapper
        </p>
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

  .back-link {
    align-self: flex-start;
    color: #417645;
    text-decoration: none;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    transition: color 0.2s ease;
  }

  .back-link:hover {
    color: #2c4f2e;
  }

  h1 {
    font-family: var(--font-family-serif);
    color: #669869;
    font-size: 3rem;
    margin-bottom: 0.75rem;
    font-weight: 800;
  }

  .subtitle {
    color: var(--text-color);
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.8;
  }

  .friends {
    text-align: left;
    line-height: 2;
    color: var(--text-color);
    font-size: 1.2rem;
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

  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
  }
</style>
