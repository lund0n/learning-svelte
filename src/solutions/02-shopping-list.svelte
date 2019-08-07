<script>
  import ShoppingItem from '../components/ShoppingItem.svelte'
  let shoppingItems = []
  let newShoppingItem = ''

  function addItem(e) {
    e.preventDefault()
    shoppingItems = shoppingItems.concat(newShoppingItem)
    newShoppingItem = ''
  }
</script>

<div>
  <h2>Shopping List</h2>
  <form on:submit={addItem}>
    <label>
      New Item:
      <input type="text" bind:value={newShoppingItem} />
    </label>
  </form>
  {#each shoppingItems as shoppingItem}
    <ShoppingItem name={shoppingItem} />
  {/each}
</div>
