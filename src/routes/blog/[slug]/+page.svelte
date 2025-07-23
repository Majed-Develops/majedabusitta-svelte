<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<svelte:head>
  <title>{data.post.title} - Majed Abu Sitta</title>
  <meta name="description" content={data.post.excerpt} />
</svelte:head>

<article class="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-3xl">
    <div class="mb-8">
      <div class="flex items-center gap-x-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
        <time datetime={data.post.date}>
          {new Date(data.post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <div class="flex gap-2">
          {#each data.post.tags as tag}
            <span class="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              {tag}
            </span>
          {/each}
        </div>
      </div>
      
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        {data.post.title}
      </h1>
      
      <p class="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
        {data.post.excerpt}
      </p>
    </div>

    <div class="prose prose-lg max-w-none dark:prose-invert">
      {@html data.post.content}
    </div>

    <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <a 
        href="/blog" 
        class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
      >
        ← Back to blog
      </a>
    </div>
  </div>
</article>