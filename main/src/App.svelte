<script lang="ts">
  // import { onMount } from 'svelte';

  import BasicReversedType from './BasicReversedType/BasicReversedType.svelte';
  import LatinStems from './LatinStems.svelte';

  const storage = window.localStorage;

  let templates = [
    {
      description: 'Basic Reversed Type',
      value: 0,
      component: BasicReversedType,
    },
    {
      description: 'Latin Stems',
      value: 1,
      component: LatinStems,
    },
  ];

  let activeTemplate;

  const tActiveTemplate = storage.getItem('activeTemplate');
  // If we've loaded before
  if (tActiveTemplate !== null) {
    activeTemplate = parseInt(tActiveTemplate);
  } else {
    activeTemplate = 0;
  }

  $: {
    storage.setItem('activeTemplate', activeTemplate.toString());
  }
</script>

<main>
  <div class="select">
    <select bind:value={activeTemplate}>
      {#each templates as template}
        <option value={template.value}>{template.description}</option>
      {/each}
    </select>
  </div>
  <div class="template">
    {#each templates as template}
      {#if activeTemplate === template.value}
        <svelte:component this={template.component} />
      {/if}
    {/each}
  </div>
</main>

<style lang="scss">
  :global(body) {
    padding: 0;
    margin: 0;
  }
  main {
    display: grid;
    grid-template:
      'select' minmax(0, 3rem)
      'template' minmax(0, 8fr);
    width: 100%;
    height: 100%;
  }

  .select {
    grid-area: select;
    align-self: stretch;
    justify-self: stretch;
    background-color: #2b2b2b;
  }

  .template {
    grid-area: template;
  }
</style>
