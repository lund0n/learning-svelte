<script>
  // 07-whats-in-your-cart.svelte
  // You're now at the grocery store, and you need a way to
  // keep track of what you've already collected in your cart,
  // and what you have left to shop for. As you click on items,
  // they move from your list to your "in cart" list. You'd like
  // it to look better, though, so we'll add some transitions
  // and animations.
  // 1. There's a crossfade function below. Add a fallback function
  //    that uses the fade transtion.
  //    Docs: https://svelte.dev/docs#fade
  // 2. Connect the send and receive functions to "in:" and "out:"
  //    directives on the labels elements on each shopping list.
  //    The "in:" directive should be tied to the "receive" crossfade function,
  //    and the "out:" directive should be tied to the "send" crossfade function.
  //    Docs: https://svelte.dev/docs#svelte_transition
  //    Hint: Each directive should look something like this:
  //    "in:receive={{ key: item.id }}"
  // 3. The items should appear to slide from one list to the other, but the list an
  //    an item leaves is kind of janky. Add the "animate:flip" directive to each
  //    label element as well. The defaults for flip are fine.
  //    Docs: https://svelte.dev/docs#flip
  // Extra credit:
  //    Suppose you want an additional column for items that you have decided not to
  //    purpose on this trip. What changes would you need to make in order to support
  //    this behavior?
  import { crossfade } from 'svelte/transition'

  const [send, receive] = crossfade({
    duration: d => d * 1.5,
    // TODO add a fallback prop here that references the "fade" transition.
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
        <label>
          <input type="checkbox" bind:checked={item.inCart} />
          {item.name}
        </label>
      {/each}
    </div>
    <div class="in-cart">
      <h2>In Your Cart</h2>
      {#each shoppingList.filter(item => item.inCart) as item (item.id)}
        <label>
          <input type="checkbox" bind:checked={item.inCart} />
          {item.name}
        </label>
      {/each}
    </div>
  </div>
</div>
