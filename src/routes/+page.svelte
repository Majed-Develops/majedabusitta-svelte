<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import Icons from '$lib/components/Icons.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  
  let mounted = false;
  let visibleSections = new Set();
  
  // Sample projects data (you can move this to a store later)
  const featuredProjects = [
    {
      title: "suhba",
      description: "Islamic learning platform with Quran games, prayer times, and educational quizzes - built with modern web technologies for an engaging spiritual experience.",
      techStack: ["SvelteKit", "TypeScript", "Tailwind CSS", "WebSockets"],
      liveUrl: "https://b03093bf.suhba.pages.dev/",
      githubUrl: "https://github.com/Majed-Develops/suhba",
      image: "/images/suhba.png"
    },
    {
      title: "Balagh",
      description: "Modern React application helping Muslims share their faith with beautiful resources and tools.",
      techStack: ["React 19", "Vite", "Tailwind CSS", "Radix UI"],
      liveUrl: "https://balagh.pages.dev/",
      githubUrl: "https://github.com/Majed-Develops/balagh",
      image: "/images/balagh.png"
    },
    {
      title: "Study Buddy",
      description: "Responsive React app combining Pomodoro timer and exam system using modern JS and Web Audio API.",
      techStack: ["React 19", "Vite", "JavaScript ES6+", "CSS"],
      liveUrl: "https://study-buddy-aln.pages.dev/",
      githubUrl: "https://github.com/Majed-Develops/study-buddy",
      image: "/images/study-buddy.png"
    }
  ];
  
  onMount(() => {
    mounted = true;
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
            visibleSections = visibleSections; // Trigger reactivity
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  });
  
  // Smooth scroll to section
  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
</script>

<svelte:head>
  <title>Majed Abu Sitta - Full Stack Developer & Cybersecurity Student</title>
  <meta name="description" content="Prompt engineer and future full-stack developer specializing in modern web development, AI, and cybersecurity. Building meaningful solutions with React, Svelte, and Node.js." />
</svelte:head>

<!-- Floating Theme Toggle -->
<div class="fixed top-6 right-6 z-50">
  <ThemeToggle />
</div>

<!-- Hero Section -->
<section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Background gradients -->
  <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {#if mounted}
      <div in:fade={{ duration: 800 }}>
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white slate:text-white sm:text-6xl lg:text-7xl" in:fly={{ y: 20, duration: 800, delay: 100 }}>
          Hi, I'm{" "}
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Majed Abu Sitta
          </span>
        </h1>
        
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 slate:text-slate-300 max-w-2xl mx-auto" in:fly={{ y: 20, duration: 800, delay: 200 }}>
          Prompt engineer and future full-stack developer specializing in modern web development, AI, and cybersecurity. Building meaningful solutions that matter.
        </p>
        
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" in:fly={{ y: 20, duration: 800, delay: 300 }}>
          <button 
            onclick={() => scrollToSection('projects')}
            class="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
          >
            View My Work
          </button>
          <button 
            onclick={() => scrollToSection('contact')}
            class="w-full sm:w-auto flex items-center justify-center gap-x-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white slate:text-white hover:text-blue-600 dark:hover:text-blue-400 slate:hover:text-blue-400 transition-colors"
          >
            Get in touch
            <Icons name="external" size={16} class="h-4 w-4" />
          </button>
        </div>

        <!-- Social Links -->
        <div class="mt-8 flex items-center justify-center gap-x-6" in:fly={{ y: 20, duration: 800, delay: 400 }}>
          <a href="https://github.com/majed-develops" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
            <Icons name="github" size={24} class="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/majed-bashir" target="_blank" rel="noopener noreferrer" class="social-link hover:text-blue-500 dark:hover:text-blue-400" aria-label="LinkedIn">
            <Icons name="linkedin" size={24} class="h-6 w-6" />
          </a>
          <a href="https://hackerone.com/mr_devz" target="_blank" rel="noopener noreferrer" class="social-link hover:text-orange-500 dark:hover:text-orange-400" aria-label="HackerOne">
            <Icons name="hackerone" size={24} class="h-6 w-6" />
          </a>
        </div>
      </div>
    {/if}
  </div>
  
  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <button onclick={() => scrollToSection('about')} class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" aria-label="Scroll to About section">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </button>
  </div>
</section>

<!-- About Section -->
<section id="about" class="py-24 bg-gray-50 dark:bg-gray-800 slate:bg-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white slate:text-white sm:text-4xl">
        About Me
      </h2>
      <p class="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 slate:text-slate-300 lg:mx-auto">
        I'm a prompt engineer and future full-stack developer who thrives on building meaningful, real-world solutions with modern web tools.
      </p>
    </div>

    <div class="mt-16">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
          <div class="relative px-6 py-8 bg-white dark:bg-gray-900 slate:bg-slate-900 rounded-lg leading-none">
            <div class="text-blue-600 mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white slate:text-white">Education</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300 slate:text-slate-300">
              Bachelor's in Cybersecurity (July 2025) - Blending security awareness with development finesse.
            </p>
          </div>
        </div>

        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
          <div class="relative px-6 py-8 bg-white dark:bg-gray-900 slate:bg-slate-900 rounded-lg leading-none">
            <div class="text-blue-600 mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white slate:text-white">Expertise</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300 slate:text-slate-300">
              Prompt Engineering, Full-Stack Development, and creating AI-enhanced solutions for real-world problems.
            </p>
          </div>
        </div>

        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
          <div class="relative px-6 py-8 bg-white dark:bg-gray-900 slate:bg-slate-900 rounded-lg leading-none">
            <div class="text-blue-600 mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white slate:text-white">Focus</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300 slate:text-slate-300">
              Creating clean UIs and fast experiences while building full-stack skills step by step.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white slate:text-white sm:text-4xl">
        Featured Projects
      </h2>
      <p class="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 slate:text-slate-300 lg:mx-auto">
        A selection of my recent work showcasing modern web development and problem-solving skills.
      </p>
    </div>

    <div class="mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
      {#each featuredProjects as project}
        <div class="group relative bg-white dark:bg-gray-900 slate:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 slate:border-slate-700">
          <!-- Project Image -->
          <div class="aspect-video overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white slate:text-white mb-2">
              {project.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 slate:text-slate-300 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            
            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.techStack as tech}
                <span class="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 slate:bg-slate-700 text-blue-800 dark:text-blue-200 slate:text-slate-200 rounded-md">
                  {tech}
                </span>
              {/each}
            </div>
            
            <!-- Project Links -->
            <div class="flex gap-3">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <Icons name="external" size={14} />
                Live Demo
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <Icons name="github" size={14} />
                Code
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Skills Section -->
<section id="skills" class="py-24 bg-gray-50 dark:bg-gray-800 slate:bg-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white slate:text-white sm:text-4xl">
        Skills & Experience
      </h2>
    </div>

    <div class="mt-16 max-w-4xl mx-auto">
      <!-- Tools & Soft Skills -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white slate:text-white mb-6 text-center">Tools & Soft Skills</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          {#each [
            "Problem Solving",
            "Self-Learning",
            "Clear Communication", 
            "Creative Thinking",
            "VS Code",
            "GitHub",
            "Cloudflare Pages",
            "Terminal/CLI"
          ] as item}
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-sm text-gray-700 dark:text-gray-300 slate:text-slate-300">{item}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white slate:text-white sm:text-4xl">
        Let's Work Together
      </h2>
      <p class="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 slate:text-slate-300 lg:mx-auto">
        Ready to bring your ideas to life? I'm always interested in discussing new opportunities and projects.
      </p>
    </div>

    <div class="mt-16 max-w-lg mx-auto">
      <div class="bg-white dark:bg-gray-900 slate:bg-slate-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700 slate:border-slate-700">
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 slate:text-slate-300">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 slate:border-slate-600 bg-white dark:bg-gray-800 slate:bg-slate-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white slate:text-white"
              required
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 slate:text-slate-300">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 slate:border-slate-600 bg-white dark:bg-gray-800 slate:bg-slate-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white slate:text-white"
              required
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 slate:text-slate-300">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 slate:border-slate-600 bg-white dark:bg-gray-800 slate:bg-slate-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white slate:text-white"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Send Message
          </button>
        </form>
        
        <!-- Alternative Contact Methods -->
        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 slate:border-slate-700">
          <p class="text-sm text-gray-600 dark:text-gray-400 slate:text-slate-400 text-center mb-4">
            Or reach out directly:
          </p>
          <div class="flex justify-center space-x-6">
            <a href="mailto:majed@example.com" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/majed-bashir" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/majed-develops" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-gray-50 dark:bg-gray-900 slate:bg-slate-900 border-t border-gray-200 dark:border-gray-700 slate:border-slate-700">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center">
      <p class="text-gray-600 dark:text-gray-400 slate:text-slate-400">
        © 2025 Majed Abu Sitta. Built with SvelteKit and Tailwind CSS.
      </p>
    </div>
  </div>
</footer>

<style>
  :global(.social-link) {
    @apply text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors;
  }
  
  :global(html) {
    scroll-behavior: smooth;
  }
  
  /* Remove fixed navigation padding */
</style>