<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let name
</script>

<div class="shopping-item">
  <button on:click={() => dispatch('delete')}>X</button>
  {name}
</div>
