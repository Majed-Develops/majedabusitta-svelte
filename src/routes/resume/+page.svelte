<script lang="ts">
  import type { PageData } from './$types';
  import Icons from '$lib/components/Icons.svelte';
  
  export let data: PageData;
</script>

<svelte:head>
  <title>Resume - Majed Abu Sitta</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center mb-16">
    <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
      Resume
    </h1>
    <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
      My professional background and experience in web development.
    </p>
    
    <div class="mt-8 flex justify-center gap-4">
      <a
        href={data.resumeData.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
      >
        <Icons name="download" size={16} />
        Download PDF
      </a>
    </div>
    
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
      Last updated: {new Date(data.resumeData.lastUpdated).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </p>
  </div>

  <div class="space-y-12">
    <!-- Summary -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          {data.resumeData.sections.summary}
        </p>
      </div>
    </section>

    <!-- Experience -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
      <div class="space-y-6">
        {#each data.resumeData.sections.experience as job}
          <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {job.position}
                </h3>
                <p class="text-blue-600 dark:text-blue-400 font-medium">
                  {job.company}
                </p>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                {job.duration}
              </span>
            </div>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {job.description}
            </p>
          </div>
        {/each}
      </div>
    </section>

    <!-- Skills -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="flex flex-wrap gap-3">
          {#each data.resumeData.sections.skills as skill}
            <span class="inline-flex items-center rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/20">
              {skill}
            </span>
          {/each}
        </div>
      </div>
    </section>

    <!-- Education -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
      <div class="space-y-4">
        {#each data.resumeData.sections.education as edu}
          <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p class="text-blue-600 dark:text-blue-400 font-medium">
                  {edu.institution}
                </p>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                {edu.year}
              </span>
            </div>
          </div>
        {/each}
      </div>
    </section>
  </div>
</div>