<script lang="ts">
  import Icons from './Icons.svelte';

  const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
    <div class="flex justify-center space-x-6 md:order-2">
      <a
        href="https://github.com/majed-develops"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
      >
        <span class="sr-only">GitHub</span>
        <Icons name="github" size={24} class="h-6 w-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/majed-bashir"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
      >
        <span class="sr-only">LinkedIn</span>
        <Icons name="linkedin" size={24} class="h-6 w-6" />
      </a>
      <a
        href="https://hackerone.com/mr_devz"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-orange-500 dark:hover:text-orange-400"
      >
        <span class="sr-only">HackerOne</span>
        <Icons name="hackerone" size={24} class="h-6 w-6" />
      </a>
    </div>
    <div class="mt-8 md:order-1 md:mt-0">
      <p class="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
        &copy; {currentYear} Majed Abu Sitta. All rights reserved.
      </p>
    </div>
  </div>
</footer>