<script lang="ts">
  import { page } from '$app/stores';
  import ThemeToggle from './ThemeToggle.svelte';
  import Icons from './Icons.svelte';

  let mobileMenuOpen = $state(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="text-xl font-bold text-gray-900 dark:text-white">
          Majed Abu Sitta
        </span>
      </a>
    </div>
    
    <div class="flex lg:hidden">
      <ThemeToggle />
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 ml-2"
        onclick={toggleMobileMenu}
      >
        <span class="sr-only">Open main menu</span>
        <Icons name="menu" size={24} class="h-6 w-6" />
      </button>
    </div>
    
    <div class="hidden lg:flex lg:gap-x-12">
      {#each navigation as item}
        <a
          href={item.href}
          class="text-sm font-semibold leading-6 transition-colors hover:text-blue-600 dark:hover:text-blue-400 {
            $page.url.pathname === item.href
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-900 dark:text-gray-300'
          }"
        >
          {item.name}
        </a>
      {/each}
    </div>
    
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <ThemeToggle />
    </div>
  </nav>

  {#if mobileMenuOpen}
    <!-- Mobile menu overlay -->
    <div class="lg:hidden">
      <div class="fixed inset-0 z-50"></div>
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:ring-gray-800"
        role="dialog"
        aria-modal="true"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5" onclick={closeMobileMenu}>
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              Majed Abu Sitta
            </span>
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onclick={closeMobileMenu}
          >
            <span class="sr-only">Close menu</span>
            <Icons name="close" size={24} class="h-6 w-6" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
            <div class="space-y-2 py-6">
              {#each navigation as item}
                <a
                  href={item.href}
                  onclick={closeMobileMenu}
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 {
                    $page.url.pathname === item.href
                      ? 'bg-gray-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400'
                      : 'text-gray-900 dark:text-gray-300'
                  }"
                >
                  {item.name}
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>