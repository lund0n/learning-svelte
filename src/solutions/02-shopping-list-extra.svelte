<script>
  import ShoppingItem from '../components/ShoppingItem.svelte'
  let shoppingItems = []
  let newShoppingItem = ''

  function addItem() {
    shoppingItems = shoppingItems.concat(newShoppingItem)
    newShoppingItem = ''
  }

  function removeItem(index) {
    shoppingItems = shoppingItems.filter((_, i) => index !== i)
  }
</script>

<div>
  <h2>Shopping List</h2>
  <form on:submit|preventDefault={addItem}>
    <label>
      New Item:
      <input type="text" bind:value={newShoppingItem} />
    </label>
  </form>
  {#each shoppingItems as shoppingItem, i}
    <ShoppingItem name={shoppingItem} on:delete={() => removeItem(i)} />
  {/each}
</div>
