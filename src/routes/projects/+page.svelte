<script lang="ts">
  import type { PageData } from './$types';
  import Icons from '$lib/components/Icons.svelte';
  
  let { data }: { data: PageData } = $props();
  
  let featuredProjects = $derived(data.projects.filter(project => project.featured));
  let otherProjects = $derived(data.projects.filter(project => !project.featured));
</script>

<svelte:head>
  <title>Projects - Majed Abu Sitta</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
    <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        My Projects
      </span>
    </h1>
    <p class="mt-6 text-lg leading-8 text-black dark:text-black slate:text-black">
      A collection of projects I've built while learning and exploring new technologies.
    </p>
  </div>

  <!-- Featured Projects -->
  {#if featuredProjects.length > 0}
    <div class="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
      <h2 class="text-2xl font-bold tracking-tight text-black dark:text-black slate:text-black mb-8">
        Featured Projects
      </h2>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {#each featuredProjects as project}
          <div class="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
            {#if project.imageUrl}
              <div class="aspect-video overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  class="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                />
              </div>
            {:else if project.videoUrl}
              <div class="aspect-video overflow-hidden rounded-lg mb-4">
                <video 
                  src={project.videoUrl} 
                  title={project.title}
                  class="h-full w-full object-cover object-center"
                  autoplay
                  muted
                  loop
                ></video>
              </div>
            {/if}
            
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-black dark:text-black slate:text-black">
                {project.title}
              </h3>
              <p class="mt-2 text-sm text-black dark:text-black slate:text-black">
                {project.description}
              </p>
              
              <div class="mt-4 flex flex-wrap gap-2">
                {#each project.techStack as tech}
                  <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/20">
                    {tech}
                  </span>
                {/each}
              </div>
              
              <div class="mt-6 flex items-center gap-4">
                {#if project.liveUrl}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                  >
                    <Icons name="external" size={16} />
                    Live Demo
                  </a>
                {/if}
                {#if project.githubUrl}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                  >
                    <Icons name="github" size={16} />
                    Source Code
                  </a>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Other Projects -->
  {#if otherProjects.length > 0}
    <div class="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
      <h2 class="text-2xl font-bold tracking-tight text-black dark:text-black slate:text-black mb-8">
        Other Projects
      </h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each otherProjects as project}
          <div class="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
            {#if project.imageUrl}
              <div class="aspect-video overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  class="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                />
              </div>
            {:else if project.videoUrl}
              <div class="aspect-video overflow-hidden rounded-lg mb-4">
                <video 
                  src={project.videoUrl} 
                  title={project.title}
                  class="h-full w-full object-cover object-center"
                  autoplay
                  muted
                  loop
                ></video>
              </div>
            {/if}
            
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-black dark:text-black slate:text-black">
                {project.title}
              </h3>
              <p class="mt-2 text-sm text-black dark:text-black slate:text-black line-clamp-3">
                {project.description}
              </p>
              
              <div class="mt-4 flex flex-wrap gap-2">
                {#each project.techStack.slice(0, 3) as tech}
                  <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/20">
                    {tech}
                  </span>
                {/each}
                {#if project.techStack.length > 3}
                  <span class="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-400/20">
                    +{project.techStack.length - 3} more
                  </span>
                {/if}
              </div>
              
              <div class="mt-6 flex items-center gap-2">
                {#if project.liveUrl}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                    aria-label="View live demo"
                  >
                    <Icons name="external" size={16} />
                  </a>
                {/if}
                {#if project.githubUrl}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2 text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                    aria-label="View source code"
                  >
                    <Icons name="github" size={16} />
                  </a>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>