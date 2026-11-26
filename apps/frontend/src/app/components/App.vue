<script setup lang="ts">
const services = [
  { name: 'Player accounts', state: 'Ready' },
  { name: 'Game services', state: 'In development' },
];
</script>

<template>
  <main class="page-shell">
    <header class="topbar">
      <a class="wordmark" href="/" aria-label="Game Platform home">
        <span class="mark" aria-hidden="true">G</span>
        <span>Game Platform</span>
      </a>
      <span class="environment"><span class="status-dot"></span> Local environment</span>
    </header>

    <section class="overview" aria-labelledby="page-title">
      <div class="intro">
        <p class="eyebrow">Platform overview</p>
        <h1 id="page-title">Your games,<br />all connected.</h1>
        <p class="description">A clear view of the services powering your player experience.</p>
      </div>

      <section class="service-list" aria-label="Platform services">
        <article v-for="service in services" :key="service.name" class="service-row">
          <div>
            <h2>{{ service.name }}</h2>
            <p>Platform service</p>
          </div>
          <span class="service-state">{{ service.state }}</span>
        </article>
      </section>
    </section>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  font-family: 'DM Sans', sans-serif;
  color: #17231d;
  background: #f3f5ef;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-optical-sizing: auto;
  font-weight: 400;
  --ink: #17231d;
  --muted: #6a756e;
  --line: #d7ddd4;
  --accent: #c4ee64;
}

* {
  box-sizing: border-box;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  background-image: linear-gradient(120deg, rgb(255 255 255 / 62%), transparent 58%),
    repeating-linear-gradient(0deg, transparent 0 39px, rgb(23 35 29 / 3%) 40px);
}

.page-shell {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
}

.topbar {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--line);
}

.wordmark {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: inherit;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
}

.mark {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: var(--ink);
  color: var(--accent);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
}

.environment {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 12px;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #548b4a;
}

.overview {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1fr);
  gap: clamp(48px, 10vw, 144px);
  align-items: center;
  min-height: min(680px, calc(100vh - 82px));
  padding: 72px 0 96px;
}

.intro {
  animation: rise-in 500ms ease-out both;
}

.eyebrow {
  margin: 0 0 22px;
  color: #63813b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1,
h2,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 22px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(42px, 6vw, 68px);
  font-weight: 600;
  line-height: 0.98;
}

.description {
  max-width: 360px;
  margin-bottom: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
}

.service-list {
  border-top: 1px solid var(--line);
  animation: rise-in 500ms 100ms ease-out both;
}

.service-row {
  min-height: 106px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid var(--line);
}

.service-row h2 {
  margin-bottom: 6px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  font-weight: 600;
}

.service-row p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
}

.service-state {
  flex: 0 0 auto;
  padding: 7px 10px;
  border-radius: 5px;
  background: #e5ebdf;
  color: #45633b;
  font-size: 11px;
  font-weight: 600;
}

@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 700px) {
  .page-shell {
    width: min(100% - 36px, 520px);
  }

  .topbar {
    height: 70px;
  }

  .overview {
    grid-template-columns: 1fr;
    gap: 54px;
    min-height: auto;
    padding: 66px 0 72px;
  }

  h1 {
    font-size: 48px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .intro,
  .service-list {
    animation: none;
  }
}
</style>