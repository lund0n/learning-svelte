<script>
  import { crossfade, fade } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 200),

    fallback: fade,
  })

  const shoppingList = [
    { id: 1, name: 'milk', inCart: false },
    { id: 2, name: 'eggs', inCart: false },
    { id: 3, name: 'butter', inCart: false },
    { id: 4, name: 'cheese', inCart: false },
    { id: 5, name: 'bread', inCart: false },
    { id: 6, name: 'cereal', inCart: false },
    { id: 7, name: 'apples', inCart: false },
    { id: 8, name: 'tomatos', inCart: false },
  ]
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
  label {
    display: block;
  }
</style>

<div>
  <h1>Shopping List</h1>
  <div class="container">
    <div class="on-list">
      <h2>To Find</h2>
      {#each shoppingList.filter(item => !item.inCart) as item (item.id)}
        <label
          in:receive={{ key: item.id }}
          out:send={{ key: item.id }}
          animate:flip>
          <input type="checkbox" bind:checked={item.inCart} />
          {item.name}
        </label>
      {/each}
    </div>
    <div class="in-cart">
      <h2>In Your Cart</h2>
      {#each shoppingList.filter(item => item.inCart) as item (item.id)}
        <label
          in:receive={{ key: item.id }}
          out:send={{ key: item.id }}
          animate:flip>
          <input type="checkbox" bind:checked={item.inCart} />
          {item.name}
        </label>
      {/each}
    </div>
  </div>
</div>
