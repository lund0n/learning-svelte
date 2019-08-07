<script>
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

  $: isValidOrder = !size || toppings.length <= SIZES[size]
  $: {
    if (!isValidOrder) {
      displayInvalidOrder()
    }
  }

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
          {#each Object.keys(SIZES) as sizeOption}
            <option value={sizeOption}>{sizeOption}</option>
          {/each}
        </select>
      </label>
    </fieldset>
    <fieldset>
      Select your toppings:
      {#each AVAILABLE_TOPPINGS as toppingOption}
        <label>
          <input type="checkbox" bind:group={toppings} value={toppingOption} />
          {toppingOption}
        </label>
      {/each}
    </fieldset>
    <button type="submit" disabled={!isValidOrder}>Order the pizza!</button>
  </form>
</div>
