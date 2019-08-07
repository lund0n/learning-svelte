<script>
  // 04-make-some-pizza.svelte
  // Modify the code so that the user can order whatever pizza that want.
  // Svelte Pizza only allows a certain number of topping on each pizza,
  // So you'll need to make sure that they don't select too many toppings.
  // 1. Render the size options in the "size" dropdown.
  //    Hint: https://svelte.dev/docs#each - expression can be any iterable.
  // 2. Bind the selected toppings to the toppings variable.
  //    Docs: https://svelte.dev/docs#bind_group
  // 3. Make isValidOrder a reactive variable, that is true when either:
  //    - size is falsy (happens at initialization)
  //    - the customer has selected no more than the maximum number of
  //      toppings for the selected pizza size.
  // 4. Run the displayInvalidOrder function when isValidOrder is false.
  // 5. Disable the submit button when the order is invalid.
  const SIZES = {
    small: 3,
    medium: 4,
    large: 5,
  }
  const AVAILABLE_TOPPINGS = [
    'pepperoni',
    'ham',
    'peppers',
    'onions',
    'pineapple',
    'olives',
  ]
  let size
  let toppings = []

  function displayInvalidOrder() {
    alert(`You can have up to ${SIZES[size]} toppings on a ${size} pizza`)
  }
  let isValidOrder

  function orderPizza() {
    alert(`You ordered a ${size} pizza with ${toppings.join(',')}. Delicious!`)
  }
</script>

<style>
  fieldset {
    border: none;
  }
</style>

<div>
  <h2>Welcome to Svelte Pizza!</h2>
  <h3>Please Customize your pizza order below.</h3>
  <form on:submit|preventDefault={orderPizza}>
    <fieldset>
      <label>
        Size:
        <select bind:value={size}>
          <!-- TODO display the size options here -->
          <!-- uncomment the next line one you have the loop correct. -->
          <!-- <option value={sizeOption}>{sizeOption}</option> -->
        </select>
      </label>
    </fieldset>
    <fieldset>
      Select your toppings:
      {#each AVAILABLE_TOPPINGS as toppingOption}
        <label>
          <input type="checkbox" value={toppingOption} />
          {toppingOption}
        </label>
      {/each}
    </fieldset>
    <button type="submit" disabled={!isValidOrder}>Order the pizza!</button>
  </form>
</div>
