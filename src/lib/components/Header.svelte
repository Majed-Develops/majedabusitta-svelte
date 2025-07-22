<script lang="ts">
  import { page } from '$app/stores';
  import ThemeToggle from './ThemeToggle.svelte';
  import Icons from './Icons.svelte';

  let mobileMenuOpen = $state(false);
  let menuAnimating = $state(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  function toggleMobileMenu() {
    menuAnimating = true;
    mobileMenuOpen = !mobileMenuOpen;
    setTimeout(() => menuAnimating = false, 300);
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && mobileMenuOpen) {
      closeMobileMenu();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="sticky top-0 z-[99998] w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="text-xl font-bold text-gray-900 dark:text-white">
          Majed Abu Sitta
        </span>
      </a>
    </div>
    
    <div class="flex items-center gap-2 lg:hidden">
      <ThemeToggle />
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
        onclick={toggleMobileMenu}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <span class="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
        {#if mobileMenuOpen}
          <Icons name="close" size={24} class="h-6 w-6" />
        {:else}
          <Icons name="menu" size={24} class="h-6 w-6" />
        {/if}
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

</header>

<!-- Mobile menu overlay - rendered at body level to escape stacking contexts -->
{#if typeof document !== 'undefined'}
  <div class="lg:hidden">
    <div 
      class="fixed inset-0 z-[99999] {mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}" 
      role="dialog" 
      aria-modal="true"
    >
      <!-- Background overlay -->
      <div 
        class="fixed inset-0 bg-gray-600/75 backdrop-blur-sm transition-opacity duration-300 ease-out {mobileMenuOpen ? 'opacity-100' : 'opacity-0'}" 
        onclick={closeMobileMenu}
        onkeydown={(e) => e.key === 'Enter' && closeMobileMenu()}
        role="button"
        tabindex="0"
        aria-label="Close mobile menu"
      ></div>
      
      <!-- Menu panel -->
      <div
        id="mobile-menu"
        class="fixed inset-y-0 right-0 z-[100000] w-full max-w-sm overflow-y-auto bg-white px-6 py-6 shadow-2xl ring-1 ring-gray-900/10 transform transition-transform duration-300 ease-out dark:bg-gray-900 dark:ring-gray-800 {mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
        style="will-change: transform;"
      >
        <div class="flex items-center justify-center pb-6 border-b border-gray-200 dark:border-gray-700">
          <a href="/" class="-m-1.5 p-1.5" onclick={closeMobileMenu}>
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              Majed Abu Sitta
            </span>
          </a>
        </div>
        <nav class="mt-6">
          <div class="space-y-1">
            {#each navigation as item}
              <a
                href={item.href}
                onclick={closeMobileMenu}
                class="flex items-center rounded-lg px-3 py-3 text-lg font-medium leading-6 transition-colors hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-gray-800 dark:active:bg-gray-700 {
                  $page.url.pathname === item.href
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                    : 'text-gray-900 dark:text-gray-100'
                }"
              >
                {item.name}
              </a>
            {/each}
          </div>
        </nav>
      </div>
    </div>
  </div>
{/if}