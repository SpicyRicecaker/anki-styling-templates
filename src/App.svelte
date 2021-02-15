<script lang="ts">
  import { onMount } from 'svelte';

  import BasicReversedType from './BasicReversedType.svelte';
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
    console.log(activeTemplate, 'CHANGED');
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
    <div>
      <div class="template">
        {#each templates as template}
          {#if activeTemplate === template.value}
            <svelte:component this={template.component} />
          {/if}
        {/each}
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    display: grid;
    grid-template-areas:
      'select' minmax(0, 1fr)
      'template' minmax(0, 8fr);
  }

  .select {
    grid-area: select;
    background-color: #292828;
  }

  .template {
    grid-area: template;
  }
</style>
