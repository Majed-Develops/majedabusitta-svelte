<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import Icons from './Icons.svelte';

  let currentTheme = $state('light');
  
  // Subscribe to theme changes
  theme.subscribe(value => {
    currentTheme = value;
  });

  function cycleTheme() {
    if (currentTheme === 'light') {
      theme.setTheme('dark');
    } else if (currentTheme === 'dark') {
      theme.setTheme('slate');
    } else {
      theme.setTheme('light');
    }
  }
</script>

<button
  onclick={cycleTheme}
  class="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 slate:border-slate-600 slate:bg-slate-800 slate:text-slate-300 slate:hover:bg-slate-700"
  aria-label="Toggle theme"
>
  <!-- Sun icon for light theme -->
  <Icons 
    name="sun" 
    size={20}
    class="rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 slate:rotate-180 slate:scale-0" 
  />
  <!-- Moon icon for dark theme -->
  <Icons 
    name="moon" 
    size={20}
    class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 slate:rotate-180 slate:scale-0" 
  />
  <!-- Computer/monitor icon for slate theme -->
  <svg 
    class="absolute h-5 w-5 rotate-180 scale-0 transition-all slate:rotate-0 slate:scale-100"
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
</button>