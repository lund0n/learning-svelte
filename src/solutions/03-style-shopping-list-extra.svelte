<script>
  import ShoppingInput from '../components/ShoppingInput.svelte'

  let shoppingItems = ['milk', 'eggs', 'butter']
  let newShoppingItem = ''

  function addItem() {
    shoppingItems = shoppingItems.concat(newShoppingItem)
    newShoppingItem = ''
  }
</script>

<style>
  h2 {
    color: steelblue;
  }
  ul {
    list-style: none;
  }
  li {
    padding: 10px 0;
  }
  li.zebra {
    background-color: peachpuff;
  }
  div :global(form) {
    border: solid 1px wheat;
    padding: 1em;
  }
</style>


<div>
  <h2>Shopping List</h2>
  <ShoppingInput bind:value={newShoppingItem} on:submit={addItem} />
  <ul>
    {#each shoppingItems as shoppingItem, i}
      <li class:zebra={i % 2 === 1}>{shoppingItem}</li>
    {/each}
  </ul>
</div>
