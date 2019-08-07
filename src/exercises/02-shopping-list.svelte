<script>
  // 02-shopping-list.svelte
  // Modify the code so that items entered into the text fields
  // are added to the shopping list when they are submitted.
  // 1. Call the addItem function when the form is submitted.
  //    Docs: https://svelte.dev/docs#on_element_event
  // 2. Add the new item to the shoppingItems array in the addItem function.
  //    Docs: https://svelte.dev/docs#2_Assignments_are_reactive
  // 3. Clear the newShoppingItem variable so it can accept new input.
  // 4. Add a loop around the rendering of the ShoppingItem component
  //    so that each shopping item is displayed.
  //    Docs: https://svelte.dev/docs#each
  // Extra credit:
  // 1. The addItem function invokes e.preventDefault(). Is there a different
  //    way to do this?
  //    Docs: https://svelte.dev/docs#on_element_event
  // 2. There's a delete button that's rendered with each shopping item.
  //    Try to make it work by capturing the "delete" event it broadcasts
  //    and removing the item from the list.
  //    Docs: https://svelte.dev/docs#on_component_event

  import ShoppingItem from '../components/ShoppingItem.svelte'
  let shoppingItems = []
  let newShoppingItem = ''

  function addItem(e) {
    e.preventDefault()
    // TODO add the item to the array
    // TODO clear the newShoppingItem value
  }
</script>

<div>
  <h2>Shopping List</h2>
  <form>
    <label>
      New Item:
      <input type="text" bind:value={newShoppingItem} />
    </label>
  </form>
  <!-- TODO add a loop here - uncomment the next line when you do -->
  <!-- <ShoppingItem name={shoppingItem} /> -->
</div>
