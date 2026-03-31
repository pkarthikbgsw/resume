<template>
  <!-- Banner -->
  <div class="banner">
    <img
      class="banner-image"
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
      alt="Banner"
    />
    <picture>
      <source srcset="/pk_10.webp" type="image/webp" />
      <img
        class="dp_image"
        src="/pk_10_sm.jpg"
        alt="DP"
        width="150"
        height="150"
        fetchpriority="high"
        decoding="async"
      />
    </picture>
  </div>

  <!-- Navigation -->
  <nav class="main-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/playground">Playground</router-link>
  </nav>

  <!-- Child route renders here -->
  <router-view />
</template>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.banner {
  width: 100%;
  position: relative;
  margin-bottom: 90px;
}

.banner-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.dp_image {
  position: absolute;
  bottom: -75px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #fff;
  object-fit: cover;
}

.main-nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1.5rem 0 2rem 0;
}

.main-nav a {
  color: #0A66C2;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.2s;
}

.main-nav a.router-link-exact-active {
  color: #003366;
  text-decoration: underline;
}

.main-nav a:hover {
  color: #003366;
}
</style>
