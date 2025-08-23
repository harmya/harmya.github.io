<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let particles: Particle[] = [];
  let mouse = { x: null as number | null, y: null as number | null, radius: 80 };
  let canvasOpacity = 0;

  class Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    density: number;
    color: string;

    constructor(x: number, y: number, size: number, color: string) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.baseX = x;
      this.baseY = y;
      this.density = Math.random() * 30 + 1;
      this.color = color;
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    update() {
      const ease = 0.08;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance < mouse.radius && distance > 1e-2) {
          const force = (mouse.radius - distance) / mouse.radius;
          const cappedForce = Math.min(force, 0.2);
          const dirX = (dx / distance) * cappedForce * this.density;
          const dirY = (dy / distance) * cappedForce * this.density;
          this.x -= dirX;
          this.y -= dirY;
        } else {
          this.x += (this.baseX - this.x) * ease;
          this.y += (this.baseY - this.y) * ease;
        }
      } else {
        this.x += (this.baseX - this.x) * ease;
        this.y += (this.baseY - this.y) * ease;
      }
      this.draw();
    }
  }

  function handleMouseMove(event: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  }

  function handleMouseLeave() {
    mouse.x = null;
    mouse.y = null;
  }

  function init() {
    particles = [];
    const colors = ['#92af94'];
    const gap = 60;
    const cols = Math.ceil(canvas.width / gap);
    const rows = Math.ceil(canvas.height / gap);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const pX = x * gap + gap / 2;
        const pY = y * gap + gap / 2;
        const size = 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(pX, pY, size, color));
      }
    }
  }

  function animate() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.globalAlpha = canvasOpacity;
    
    particles.forEach((p) => p.update());
    requestAnimationFrame(animate);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function handleResize() {
    resizeCanvas();
    init();
  }

  onMount(() => {
    const context = canvas.getContext('2d');
    if (!context) return;
    ctx = context;
    resizeCanvas();
    init();
    
    let fadeInterval = setInterval(() => {
        if (canvasOpacity < 1) {
          canvasOpacity += 0.05;
          if (canvasOpacity >= 1) {
            canvasOpacity = 1;
            clearInterval(fadeInterval); 
          }
        }
    }, 30);
    
    animate();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(fadeInterval);
    };
  });
</script>

<canvas
  bind:this={canvas}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  style="opacity: {canvasOpacity};"
></canvas>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    pointer-events: auto;
  }
</style> 