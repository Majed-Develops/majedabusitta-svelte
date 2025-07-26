<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let mounted = false;
  let visibleElements = new Set<string>();

  onMount(() => {
    mounted = true;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate');
            if (elementId) {
              visibleElements.add(elementId);
              visibleElements = visibleElements; // Trigger reactivity
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  });

  export { visibleElements, mounted };
</script>

<!-- This component handles scroll animations for child components -->