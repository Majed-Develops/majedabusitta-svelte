<script lang="ts">
  import Icons from '$lib/components/Icons.svelte';
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Majed Abu Sitta - Full Stack Developer</title>
</svelte:head>

<div class="relative isolate">
  <div
    class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    ></div>
  </div>

  <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    {#if mounted}
      <div class="mx-auto max-w-2xl text-center" in:fade={{ duration: 800 }}>
        <h1 class="text-4xl font-bold tracking-tight text-black dark:text-white slate:text-white sm:text-6xl" in:fly={{ y: 20, duration: 800, delay: 100 }}>
          Hi, I'm{" "}
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Majed Abu Sitta
          </span>
        </h1>
        
        <p class="mt-6 text-lg leading-8 text-black dark:text-white" in:fly={{ y: 20, duration: 800, delay: 200 }}>
          I'm a tech enthusiast diving deep into full-stack development, AI, and cybersecurity. I enjoy building practical applications and constantly learning new skills to create solutions that matter.
        </p>
        
        <div class="mt-10 flex items-center justify-center gap-x-6" in:fly={{ y: 20, duration: 800, delay: 300 }}>
          <a
            href="/projects"
            class="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            View My Work
          </a>
          <a
            href="/contact"
            class="flex items-center gap-x-2 text-sm font-semibold leading-6 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Get in touch
            <Icons name="external" size={16} class="h-4 w-4" />
          </a>
        </div>

        <div class="mt-8 flex items-center justify-center gap-x-6" in:fly={{ y: 20, duration: 800, delay: 400 }}>
          <a
            href="https://github.com/majed-develops"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
            aria-label="GitHub"
          >
            <Icons name="github" size={24} class="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/majed-bashir"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Icons name="linkedin" size={24} class="h-6 w-6" />
          </a>
          <a
            href="https://hackerone.com/mr_devz"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            aria-label="HackerOne"
          >
            <Icons name="hackerone" size={24} class="h-6 w-6" />
          </a>
        </div>
      </div>
    {/if}

    {#if mounted}
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl" in:fly={{ y: 40, duration: 800, delay: 400 }}>
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-black dark:text-white">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            Modern Technologies
          </dt>
          <dd class="mt-2 text-base leading-7 text-black dark:text-white">
            I leverage AI tools like Claude and prompt-based coding to build projects and learn new skills. Currently, I'm focused on strengthening my JavaScript knowledge while exploring cybersecurity through online learning platforms. I'm also diving deeper into AI to better understand how it can enhance development and problem-solving.
          </dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-black dark:text-white">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            Performance Focused
          </dt>
          <dd class="mt-2 text-base leading-7 text-black dark:text-white">
            Every application I build is optimized for speed, accessibility, and
            user experience across all devices and platforms.
          </dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-black dark:text-white">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            Team Collaboration
          </dt>
          <dd class="mt-2 text-base leading-7 text-black dark:text-white">
            I excel at working with cross-functional teams, mentoring developers,
            and delivering projects on time and within scope.
          </dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-black dark:text-white">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189c.422-.115.815-.277 1.15-.495.336-.219.638-.488.891-.806.253-.32.447-.686.58-1.073a5.955 5.955 0 00.22-1.245v-.002a5.86 5.86 0 00-.22-1.245 4.47 4.47 0 00-.58-1.073 4.16 4.16 0 00-.891-.806c-.335-.218-.728-.38-1.15-.495a6.01 6.01 0 00-1.5-.189m0 0V5.25c0-.414.336-.75.75-.75s.75.336.75.75v2.25m0 5.25v2.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.25"
                />
              </svg>
            </div>
            Continuous Learning
          </dt>
          <dd class="mt-2 text-base leading-7 text-black dark:text-white">
            I stay up-to-date with the latest technologies and best practices,
            constantly improving my skills and knowledge.
          </dd>
        </div>
      </dl>
    </div>
    {/if}
  </div>

  <div
    class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div
      class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-600 to-blue-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    ></div>
  </div>
</div>