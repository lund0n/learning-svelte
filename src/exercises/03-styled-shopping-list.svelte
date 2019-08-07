<script>
  // 03-styled-shopping-list.svelte
  // Modify the shopping list so it has a little more
  // flair.
  // 1. The customer wants the "Shopping List" title to be colored "steelblue"
  //    (they like "Zoolander")
  //    Docs: https://svelte.dev/docs#style
  // 2. They also don't like those bullet points. Can you remove them?
  //    Hint: ul has a "list-style" property.
  // 3. They also want the list items to have 10px top and bottom padding.
  // 4. Finally, they would like every even item to have the "zebra" class applied.
  //    Docs: https://svelte.dev/docs#class_name
  // Extra Credit:
  // 1. The customer wants the form to have a border around the form,
  //    but we are told we are unable to change the ShoppingInput component
  //    directly. The develop has tried to change it (see style rules below),
  //    but it still doesn't work. Can you fix it?
  //    Docs: https://svelte.dev/docs#style
  import ShoppingInput from '../components/ShoppingInput.svelte'

  let shoppingItems = ['milk', 'eggs', 'butter']
  let newShoppingItem = ''

  function addItem() {
    shoppingItems = shoppingItems.concat(newShoppingItem)
    newShoppingItem = ''
  }
</script>

<style>
  li.zebra {
    background-color: peachpuff;
  }
  div form {
    border: solid 1px wheat;
    padding: 1em;
  }
</style>

<div>
  <h2>Shopping List</h2>
  <ShoppingInput bind:value={newShoppingItem} on:submit={addItem} />
  <ul>
    {#each shoppingItems as shoppingItem, i}
      <li>{shoppingItem}</li>
    {/each}
  </ul>
</div>
