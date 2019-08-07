<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let value = ''
</script>

<form on:submit|preventDefault={() => dispatch('submit')}>
  <label>
    New Item:
    <input type="text" bind:value />
  </label>
</form>
