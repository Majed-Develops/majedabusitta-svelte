<script lang="ts">
  import type { PageData } from './$types';
  
  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>About - Majed Abu Sitta</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-2xl lg:mx-0">
    <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About Me
      </span>
    </h1>
    
    <div class="mt-6 about-content">
      {@html data.aboutContent}
    </div>
  </div>

  <div class="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white shadow-2xl hover:scale-105 transition-transform">
      <div class="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-white/10"></div>
      <div class="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-white/5"></div>
      <div class="relative z-10">
        <div class="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3">Active Projects</h3>
        <p class="text-blue-100 text-sm leading-relaxed">Working on several personal and learning projects to sharpen my skills</p>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white shadow-2xl hover:scale-105 transition-transform">
      <div class="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-white/10"></div>
      <div class="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-white/5"></div>
      <div class="relative z-10">
        <div class="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3">Collaborations</h3>
        <p class="text-emerald-100 text-sm leading-relaxed">Collaborated with peers and contributed to small projects as I grow</p>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white shadow-2xl hover:scale-105 transition-transform">
      <div class="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-white/10"></div>
      <div class="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-white/5"></div>
      <div class="relative z-10">
        <div class="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3">Growth Mindset</h3>
        <div class="flex items-center space-x-2">
          <span class="text-3xl font-bold">100%</span>
          <span class="text-orange-100 text-sm">Eager to Improve</span>
        </div>
      </div>
    </div>
  </div>
</div>