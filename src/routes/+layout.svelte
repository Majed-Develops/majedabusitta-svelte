<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  onMount(() => {
    // Initialize theme classes on mount
    const currentTheme = localStorage.getItem('portfolio-theme') || 'light';
    document.documentElement.classList.remove('light', 'dark', 'slate');
    document.documentElement.classList.add(currentTheme);
  });
</script>

<svelte:head>
  <title>Majed Abu Sitta - Full Stack Developer</title>
  <meta name="description" content="Professional portfolio of Majed Abu Sitta, a full-stack developer specializing in React, Next.js, and modern web technologies." />
  <meta name="keywords" content="Full Stack Developer, React, Next.js, TypeScript, Web Development" />
  <meta name="author" content="Majed Abu Sitta" />
  
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:url" content="https://majedabusitta.com" />
  <meta property="og:title" content="Majed Abu Sitta - Full Stack Developer" />
  <meta property="og:description" content="Professional portfolio showcasing projects, skills, and experience in modern web development." />
  <meta property="og:site_name" content="Majed Abu Sitta Portfolio" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Majed Abu Sitta - Full Stack Developer" />
  <meta name="twitter:description" content="Professional portfolio showcasing projects, skills, and experience in modern web development." />
  <meta name="twitter:creator" content="@majed_bashir" />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>